from django.contrib import admin
from django.urls import path
from contacto.views import contactoView
from index.views import indexView
from registro.views import registroView
from inicioSesion.views import inicioSesionView
from hotel_stgo.views import hotelStgoView
from hotel_region.views import hotelRegionView
from inicioSesionAdmin.views import inicioSesionAdminView
from gestion_cliente.views import gestion_clienteView, del_cliente

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contacto/', contactoView),
    path('', indexView),
    path('registro/', registroView),
    path('inicioSesion/', inicioSesionView),
    path('hotel_stgo/', hotelStgoView),
    path('hotel_region/', hotelRegionView),
    path('inicioSesionAdmin/', inicioSesionAdminView),
    path('gestion_cliente/', gestion_clienteView),
    path('del_cliente/<str:pk>', del_cliente, name='del_cliente'),
]
