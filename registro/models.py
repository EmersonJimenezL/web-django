from django.db import models

# Create your models here.


from .models import models

class Cliente(models.Model):
    rutCliente = models.CharField(db_column='rut',max_length=11 ,primary_key=True)
    nombre = models.CharField(max_length=50, blank=False, null=False)
    apellido = models.CharField(max_length=50, blank=False, null=False)
    email = models.CharField(max_length=50, blank=False, null=False)
    direccion = models.CharField(max_length=50, blank=False, null=False)   
    contrasenna = models.CharField(max_length=100, blank=False, null=False)


def __str__(self):
    return str(self.rutCliente)