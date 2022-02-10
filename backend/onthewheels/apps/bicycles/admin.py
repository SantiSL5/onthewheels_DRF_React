from django.contrib import admin
from .models import Bicycle, Bicycle_User

# Register your models here.
admin.site.register(Bicycle)
admin.site.register(Bicycle_User)