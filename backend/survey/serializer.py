from rest_framework import serializers
from .models import Profile, Eat, Survey, Work, Emptions, Drink


class ProfileSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile


class EatSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Eat


class SurveySerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Survey


class WorkSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Work


class EmptionsSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Emptions


class DrinkSerialize(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Drink