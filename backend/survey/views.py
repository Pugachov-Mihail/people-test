from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response


class Test(APIView):

    def get(self, request):
        return Response({"le": 'a'})
