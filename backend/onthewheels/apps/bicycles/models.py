from django.db import models
from onthewheels.apps.core.models import TimestampedModel
# Create your models here.

class Bicycle(TimestampedModel):
    serial_number = models.CharField(db_index=True, unique=True, max_length=255)
    number = models.AutoField(unique=True)
    battery = models.IntegerField(
        default=100,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(0)
        ]
    )
    warning = models.BooleanField(default=False)
    disabled = models.BooleanField(default=False)
    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Bicycles"
    
    def __str__(self):
        return self.number
    
class Bicycle_User(TimestampedModel):
    user = models.ForeignKey(
        'authentication.User', on_delete=models.CASCADE, related_name='users'
    )
    station = models.ForeignKey(
        'bicycles.Bicycle', on_delete=models.CASCADE, related_name='bicycles'
    )
    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Bicycles_Users"