from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Trabajador
from gestion_cliente.views import gestion_clienteView


# Create your views here.

def inicioSesionAdminView(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        
        try:
            trabajador = Trabajador.objects.get(email=email, password=password)
            request.session['rutTrabajador'] = trabajador.rutTrabajador # Guardar trabajador en la sesión
            return redirect(gestion_clienteView)  # Redirigir a la vista de modificación de clientes
        except Trabajador.DoesNotExist:
            return HttpResponse('Credenciales inválidas')
    
    return render(request, 'inicioSesionAdmin.html')
