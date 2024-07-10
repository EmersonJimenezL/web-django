from django.db import models

# Create your models here.

from .models import models

class Trabajador (models.Model):
    rutTrabajador = models.CharField(db_column='rut',max_length=11 ,primary_key=True, unique=True)
    nombre = models.CharField(max_length=50, blank=False, null=False)
    email =  models.CharField(max_length=50, blank=False, null=False)
    password = models.CharField(max_length=50, blank=False, null=False)

def __str__(self):
    return str(self.rutTrabajador)