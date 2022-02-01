from django.urls import path
from . import views

urlpatterns = [
    path('api/Jacket', views.JacketListCreate.as_view() ),
]