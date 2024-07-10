from django.shortcuts import render, redirect
from django.http import HttpResponse
from registro.models import Cliente  # Importa tus modelos de clientes si los tienes definidos

def gestion_clienteView(request):
    # Aquí va la lógica para modificar clientes
    # Por ejemplo, puedes obtener todos los clientes
    clientes = Cliente.objects.all()

    # Renderiza el template con la lista de clientes
    return render(request, 'modificar_cliente.html', {'clientes': clientes})
