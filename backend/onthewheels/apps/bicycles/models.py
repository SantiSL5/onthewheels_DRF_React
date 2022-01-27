from django.db import models

# Create your models here.

class Bicycle(models.Model):
    serial_number = models.CharField(db_index=True, unique=True, max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Bicycles"
    
    def __str__(self):
        return self.serial_number