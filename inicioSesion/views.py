from django.shortcuts import render

# Create your views here.

def inicioSesionView(request):
    return render(request, 'inicioSesion.html')