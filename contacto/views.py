from django.shortcuts import render

# Create your views here.

def contactoView(request):
    return render(request, 'contacto.html')