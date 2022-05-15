from django import forms
from .models import *

class CarParkForm(forms.ModelForm):
    class Meta:
        model = LeetCode
        fields = ('__all__')