from django.shortcuts import render

# Create your views here.

def hotelRegionView(request):
    return render(request,'hotel-region.html')