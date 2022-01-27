from django.db import models
from django.utils.text import slugify
# Create your models here.

class Station(models.Model):
    slug = models.SlugField(db_index=True, unique=True, max_length=255, editable=False)
    name = models.CharField(max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name, allow_unicode=True)
        super().save(*args, **kwargs)

    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Stations"
    
    def __str__(self):
        return self.slug