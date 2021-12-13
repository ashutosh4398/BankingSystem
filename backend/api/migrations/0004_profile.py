# Generated by Django 3.0.5 on 2021-12-11 16:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20211211_2204'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('aadhar_card', models.FileField(null=True, upload_to='documents/')),
                ('profile_pic', models.FileField(null=True, upload_to='documents/')),
                ('pan_card', models.FileField(null=True, upload_to='documents/')),
                ('signature', models.FileField(null=True, upload_to='documents/')),
                ('electricity_bill', models.FileField(null=True, upload_to='documents/')),
                ('birth_certificate', models.FileField(null=True, upload_to='documents/')),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]