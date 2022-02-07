from django.db import models
from onthewheels.apps.core.models import TimestampedModel
# Create your models here.

class Bicycle(TimestampedModel):
    serial_number = models.CharField(db_index=True, unique=True, max_length=255)
    station = models.ForeignKey(
        'stations.Station', on_delete=models.DO_NOTHING, related_name='stations'
    )
    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Bicycles"
    
    def __str__(self):
        return self.serial_number