from rest_framework import generics, mixins, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
)
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Bicycle
from .serializers import BicycleSerializer

# Create your views here.

class BicycleViewSet(viewsets.ModelViewSet):
    queryset = Bicycle.objects.all()
    serializer_class = BicycleSerializer
    lookup_field = 'serial_number'
    permission_classes = (IsAdminUser,)