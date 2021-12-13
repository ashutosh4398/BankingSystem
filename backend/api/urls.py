from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("user",UserViewSet, basename="user")
router.register("transaction",TransactionViewSet, basename="transaction")

urlpatterns = [
    path("signup/",SignupView.as_view(),name='signup'),
    path("login/",LoginView.as_view(),name='login'),
    path("",include(router.urls)),

]