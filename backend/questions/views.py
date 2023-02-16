from django.shortcuts import render
from rest_framework import viewsets

from .models import Question
from .serializers import QuestionSerializer


# Create your views here.

class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()