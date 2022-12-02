from django.urls import path
from rest_framework import routers
from .models import Survey

from .views import Tests

urlpatterns = [
    path('test/', Tests.as_view())
]