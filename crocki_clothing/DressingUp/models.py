from distutils.command.upload import upload
from email.policy import default
from turtle import color
from django.db import models
from django.urls import reverse
# Create your models here.

class Jacket(models.Model):

    name = models.CharField(max_length=100, verbose_name='Название')
    sizeEu = models.CharField(max_length=10, verbose_name='Размер (Е)')
    quantity = models.IntegerField(verbose_name='Кол-во')
    color = models.CharField(max_length=20,verbose_name='Цвет')
    time_create = models.DateField(auto_now_add=True,verbose_name='Дата создания')
    time_update = models.DateTimeField(auto_now=True,verbose_name='Дата обновления')
    photo = models.ImageField(upload_to="images/Jackets/%Y-%m-%d/", default='images/Jackets/jacket.jpeg',verbose_name='Фото')

    def __str__(self):
        return self.name

    def get_absolute_url(self):
            return f'/jacket/{self.name}/'

    class Meta:
        verbose_name = "Классический Джакет"
        verbose_name_plural = "Классические Джакеты"
        ordering = ['time_create','name']
    