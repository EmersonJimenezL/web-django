from django.shortcuts import render

# Create your views here.

def registroView(request):
    if (request.method == 'POST'):
        ## agregan elemento
        print(request.POST["nombre"])
        print(request.POST["region"])
        return render(request, 'registro.html')
    else:
        ## aca obtiene solamente el formulario
        print(request)
        return render(request, 'registro.html')