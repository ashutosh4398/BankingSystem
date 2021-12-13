from django.core.management.base import BaseCommand
from api.models import CustomUser

class Command(BaseCommand):
    def handle(self,*args,**kwargs):
        email = input("Enter email:")
        password = input("Enter password: ")
        user = CustomUser()
        user.email=email
        user.set_password(password)
        user.is_staff = True
        user.is_superuser = True
        user.save()