from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from .serializer import SurveySerialize
from rest_framework.viewsets import ModelViewSet
from .models import Survey


class Tests(ListAPIView):
    queryset = Survey.objects.all()
    serializer_class = SurveySerialize





