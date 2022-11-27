from rest_framework import serializers
from .models import Profile, Eat


class ProfileSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile


class EatSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Eat

