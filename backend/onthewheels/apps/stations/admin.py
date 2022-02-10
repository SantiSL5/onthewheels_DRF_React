from django.contrib import admin
from .models import Station, Node, Node_Bicycle

# Register your models here.
admin.site.register(Station)
admin.site.register(Node)
admin.site.register(Node_Bicycle)