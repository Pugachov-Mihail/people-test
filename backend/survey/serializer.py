from rest_framework import serializers
from .models import Profile


class ProfileSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile

