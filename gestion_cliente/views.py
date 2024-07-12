from django.shortcuts import render, get_object_or_404
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

def clientes_findEdit(request, pk):
    print("PK recibido:", pk)  # Agrega esta línea para depuración
    cliente = get_object_or_404(Cliente, rutCliente=pk)
    return render(request, 'clientes_edit.html', {'cliente': cliente})

        

def update_cliente(request, pk):
    if request.method == "POST":
        cliente = get_object_or_404(Cliente, rutCliente=pk)

        cliente.nombre = request.POST["nombre"]
        cliente.apellido = request.POST["apellido"]
        cliente.email = request.POST["email"]
        cliente.direccion = request.POST["direccion"]
        cliente.region = request.POST["region"]
        cliente.comuna = request.POST["comuna"]
        cliente.contrasenna = request.POST["password"]

        cliente.save()

        mensaje = "Datos actualizados..."
        clientes = Cliente.objects.all()
        return render(request, 'modificar_cliente.html', {'clientes': clientes, 'mensaje': mensaje})
    else:
        clientes = Cliente.objects.all()
        return render(request, 'modificar_cliente.html', {'clientes': clientes})
      
