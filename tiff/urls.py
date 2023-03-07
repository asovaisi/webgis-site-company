from django.urls import path
from .views import index

app_name = 'tiff'
urlpatterns = [
    path('', index, name='index'),
]