from rest_framework import serializers
from .models import Bicycle

class BicycleSerializer(serializers.ModelSerializer):
    serial_number = serializers.CharField(db_index=True, max_length=255, unique=True)
    station = models.ForeignKey(
        'stations.Station', on_delete=models.DO_NOTHING, related_name='stations'
    )

    class Meta:
        model = Bicycle
        fields = (
            'serial_number',
            'station'
        )