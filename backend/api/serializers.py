from rest_framework import serializers
from .models import *

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['first_name','last_name','email','phone','dob','password']
    
    def create(self,validated_data):
        instance = CustomUser
        for key,value in validated_data.items():
            if key == "password":
                instance.set_password(value)
            else:
                setattr(instance, key, value)
        
        instance.save()
        return instance

class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=100,required=True)
    password = serializers.CharField(max_length=100,required=True)


class UserViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['aadhar_card','profile_pic','pan_card','signature','electricity_bill','birth_certificate','user','documents_verified']
        depth=2
    
    def update(self,instance,validated_data):
        for key,value in validated_data.items():
            print(key,value)
            setattr(instance,key,value)
        instance.save()
        return instance

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions
        fields = "__all__"
    
    def create(self,validated_data):
        instance = Transactions()
        user = self.context.pop("user",None)
        instance.user=user
        for key,value in validated_data.items():
            setattr(instance,key,value)
        instance.save()
        return instance
