from django.contrib import admin

# Register your models here.
from usersgroups.models import CustomGroup, CustomUser

admin.site.register(CustomGroup)
admin.site.register(CustomUser)
