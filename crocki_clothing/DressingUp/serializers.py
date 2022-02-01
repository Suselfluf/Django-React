from dataclasses import field
from rest_framework import serializers
from .models import Jacket

class JacketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jacket
        fields = ('id', 'name', 'sizeEu', 'quantity', 'color')