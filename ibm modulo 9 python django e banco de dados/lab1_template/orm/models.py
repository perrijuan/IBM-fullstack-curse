from django.db import models



# Define your first model from here:
class User(models.Model):
    # CharField for user's first name
    first_name = models.CharField(null=False, max_length=30, default='alice')
    # CharField for user's last name
    last_name = models.CharField(null=False, max_length=30, default='bob')
    # CharField for user's date for birth
    dob = models.DateField(null=True)