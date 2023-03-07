from django.shortcuts import render
from .models import Tiff
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def index(request):
    tiff = Tiff.objects.all()
    return render(request, 'tiff/index.html', {'tiff': tiff})