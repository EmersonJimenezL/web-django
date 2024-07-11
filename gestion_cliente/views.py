from django.shortcuts import render, redirect
from registro.models import Cliente  # Importa tus modelos de clientes si los tienes definidos

def gestion_clienteView(request):
    # Aquí va la lógica para modificar clientes
    # Por ejemplo, puedes obtener todos los clientes
    clientes = Cliente.objects.all()

    # Renderiza el template con la lista de clientes
    return render(request, 'modificar_cliente.html', {'clientes': clientes});


def del_cliente(request, pk):
    context = {}
    try:
        cliente = Cliente.objects.get(rutCliente=pk)

        cliente.delete()
        mensaje = 'Datos eliminados'
        clientes = Cliente.objects.all()
        context = {'clientes': clientes, 'Mensaje': mensaje}
        return render(request, 'modificar_cliente.html', {'clientes': clientes});
    except Cliente.DoesNotExist:
        mensaje = 'Cliente no encontrado'
        clientes = Cliente.objects.all()
        context = {'clientes': clientes, 'Mensaje': mensaje}
        return render(request, 'modificar_cliente.html', context);
