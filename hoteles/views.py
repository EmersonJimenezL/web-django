from django.shortcuts import render

# Create your views here.

def hotelesView(request):
    return render(request, 'hoteles.html')