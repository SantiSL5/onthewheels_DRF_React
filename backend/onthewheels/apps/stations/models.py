from django.db import models
from django.utils.text import slugify
from onthewheels.apps.core.models import TimestampedModel
# Create your models here.

class Station(TimestampedModel):
    slug = models.SlugField(db_index=True, unique=True, max_length=255, editable=False)
    number = models.IntegerField(unique=True)
    name = models.CharField(max_length=255)
    warning = models.BooleanField(default=False)
    disabled = models.BooleanField(default=False)
      
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name, allow_unicode=True)
        super().save(*args, **kwargs)

    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Stations"
    
    def __str__(self):
        return self.number

class Node(TimestampedModel):
    number = models.IntegerField(db_index=True)
    station = models.ForeignKey(
        'stations.Station', on_delete=models.CASCADE, related_name='stations'
    )
    warning = models.BooleanField(default=False)
    disabled = models.BooleanField(default=False)

    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Nodes"

    def __str__(self):
        return self.number

class Node_Bicycle(TimestampedModel):
    node = models.ForeignKey(
        'nodes.Node', on_delete=models.CASCADE, related_name='nodes'
    )
    bicycle = models.ForeignKey(
        'bicycles.Bicycle', on_delete=models.CASCADE, related_name='bicycles'
    )
    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Nodes_Bicycles"