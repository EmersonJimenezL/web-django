from django.db import models

# Create your models here.


from .models import models

class Cliente(models.Model):
    nombreUsuario = models.CharField(max_length=30, unique=True) 
    contrasenna = models.CharField(max_length=100)

def __str__(self):
    return str(self.nombreUsuario)+" "+str(self.contrasenna)