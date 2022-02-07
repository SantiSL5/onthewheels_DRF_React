from rest_framework import serializers
from .models import Station

class StationSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(db_index=True, max_length=255, unique=True)
    name = serializers.CharField(required=True)

    class Meta:
        model = Station
        fields = (
            'slug',
            'name',
        )