from rest_framework import serializers
from .models import Bicycle

class BicycleSerializer(serializers.ModelSerializer):
    serial_number = serializers.CharField(db_index=True, max_length=255, unique=True)
    created_on = serializers.DateTimeField()


    class Meta:
        model = Bicycle
        fields = (
            'serial_number',
            'created_on',
        )