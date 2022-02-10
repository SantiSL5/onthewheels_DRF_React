from django.db import models
from onthewheels.apps.core.models import TimestampedModel
# Create your models here.

class Ticket(TimestampedModel):
    CHOICES = (
        ('station', 'station'),
        ('node', 'node'),
        ('bicycle', 'bicycle'),
    )
    type = models.CharField(choices=CHOICES)
    solved = models.BooleanField(default=False)
    title = models.TextField()
    description = models.TextField()
    # battery = models.IntegerField(
    #     default=100,
    #     validators=[
    #         MaxValueValidator(100),
    #         MinValueValidator(0)
    #     ]
    # )
    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Tickets"
    
    def __str__(self):
        return self.id

class Ticket_User(TimestampedModel):
    CHOICES = (
        ('station', 'station'),
        ('node', 'node'),
        ('bicycle', 'bicycle'),
    )
    type = models.CharField(choices=CHOICES)
    issue_title = models.TextField()
    issue = models.TextField()
    user = models.ForeignKey(
        'authentication.User', on_delete=models.CASCADE, related_name='users'
    )
    read = models.BooleanField(default=False)
    # battery = models.IntegerField(
    #     default=100,
    #     validators=[
    #         MaxValueValidator(100),
    #         MinValueValidator(0)
    #     ]
    # )
    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Tickets_Users"
    
    def __str__(self):
        return self.id