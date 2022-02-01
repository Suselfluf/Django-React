from django.contrib import admin
from .models import *


# Register your models here.

class JacketAdmin(admin.ModelAdmin):
    list_display = ('id', 'name','sizeEu', 'color', 'time_create')
    search_fields = ('name','content') 


admin.site.register(Jacket, JacketAdmin)


