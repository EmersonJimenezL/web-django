from django.shortcuts import render

from .models import Cliente

# Create your views here.

def registroView(request):
    if (request.method == 'POST'):
        ## agregan elemento
            obj = Cliente.objects.create(
            rutCliente = request.POST["rut"],
            nombre = request.POST["nombre"],
            apellido = request.POST["apellido"],
            email = request.POST["email"],
            direccion = request.POST["direccion"],
            region = request.POST["region"],
            comuna = request.POST["comuna"],
            contrasenna = request.POST["password"],
        );
            obj.save();
            context = {"mensaje": "Se a creado el cliente."}
            return render(request, 'registro.html',context)
    
    else:
        ## aca obtiene solamente el formulario
        context = {"mensaje": "Se a creado el cliente."}
        print(request)
        return render(request, 'registro.html',context)
    