from django.conf.urls import url
from django.urls import reverse
from .views import StationViewSet

app_name = 'Stations'

#Admin
station_list = StationViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

station_detail = StationViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})