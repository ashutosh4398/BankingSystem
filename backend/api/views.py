from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import api.serializers as ser
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from .models import *
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser

# Create your views here.
class SignupView(APIView):
    serializer_class = ser.SignupSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True})
        return Response(serializer.errors)

class LoginView(APIView):
    serializer_class = ser.LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get("email")
            password = serializer.validated_data.get("password")
            user = authenticate(email=email, password=password)
            if user:
                token,_ = Token.objects.get_or_create(user=user)
                return Response({
                    "token": token.key
                })
            return Response({
                "success": False,
                "message": "User not found"
            },status = 400)
        return Response(serializer.errors)


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = ser.UserViewSerializer
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    
    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)
    
    def list(self,request):
        instance,_ = Profile.objects.get_or_create(user=request.user)
        serializer = self.serializer_class(instance=instance)
        return Response(serializer.data)
    
    def create(self,request,*args,**kwargs):
        instance,_ = Profile.objects.get_or_create(user=request.user)
        print(request.data)
        serializer = self.serializer_class(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True, "message": "Added successfully!"})
        return Response(serializer.errors)


class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = ser.TransactionSerializer
    
    def get_queryset(self):
        return Transactions.objects.filter(user=self.request.user)
    
    def list(self,request):
        instances = Transactions.objects.filter(user=self.request.user)
        serializer = self.serializer_class(instance=instances, many=True)
        return Response(serializer.data)
    
    def create(self,request,*args,**kwargs):
        serializer = self.serializer_class(data=request.data, context={"user": self.request.user})
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True})
        return Response(serializer.errors)

