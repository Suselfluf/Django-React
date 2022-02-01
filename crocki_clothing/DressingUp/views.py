from lib2to3.pytree import Leaf
from platform import java_ver
from django.shortcuts import render
from .models import Jacket
from .serializers import JacketSerializer
from rest_framework import generics

# Create your views here.

class JacketListCreate(generics.ListCreateAPIView):
    queryset = Jacket.objects.all()
    serializer_class = JacketSerializer

