from rest_framework import serializers
from backend.survey.models import Profile


class ProfileSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile

