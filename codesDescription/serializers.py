from pyrsistent import field
from rest_framework import serializers
from .models import *

class LeetcodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeetCode
        fields = ('__all__')

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('__all__')