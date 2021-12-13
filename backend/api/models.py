from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save

# Create your models here.
class CustomUser(AbstractUser):
    username=""
    email = models.EmailField(unique=True)
    is_fully_registered = models.BooleanField(default=False)
    dob = models.DateField(blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    current_balance = models.FloatField(default=0)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

class Profile(models.Model):
    user = models.OneToOneField(to=CustomUser, on_delete=models.SET_NULL, null=True)
    aadhar_card = models.FileField(upload_to="documents/",null=True, blank=True)
    profile_pic = models.FileField(upload_to="documents/",null=True, blank=True)
    pan_card = models.FileField(upload_to="documents/",null=True, blank=True)
    signature = models.FileField(upload_to="documents/",null=True, blank=True)
    electricity_bill = models.FileField(upload_to="documents/",null=True, blank=True)
    birth_certificate = models.FileField(upload_to="documents/",null=True, blank=True)
    documents_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.user.email

PAYMENT_STATUS = [
    ('INITIATED','INITIATED'),
    ('SUCCESS','SUCCESS'),
    ('FAILED','FAILED'),
]
class Transactions(models.Model):
    user = models.ForeignKey(to=CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    amount = models.FloatField(default=0)
    status = models.CharField(choices=PAYMENT_STATUS, default="INITIATED",max_length=30)
    to_account_number = models.CharField(max_length=20, blank=True, null=True)
    to_ifsc_code = models.CharField(max_length=20, blank=True, null=True)
    to_account_holder_name = models.CharField(max_length=20, blank=True, null=True)
    is_approved = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now=True)

from .signals import update_current_amount
post_save.connect(update_current_amount, sender=Transactions)