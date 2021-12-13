from django.contrib import admin
from .models import CustomUser, Profile, Transactions

# Register your models here.
admin.site.register([CustomUser, Profile, Transactions])
