from django.shortcuts import render

# Create your views here.

def registroView(request):
    return render(request, 'registro.html')