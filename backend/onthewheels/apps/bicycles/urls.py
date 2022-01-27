from django.conf.urls import url
from django.urls import reverse
from .views import BicycleViewSet

app_name = 'Bicycles'

#Admin
bicycle_list = BicycleViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

bicycle_detail = BicycleViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})