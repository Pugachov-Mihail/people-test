from rest_framework import serializers
from .models import Profile, Eat, Survey, Work, Emptions, Drink, ChoiseEat


class ProfileSerialize(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'


class ChoiseSerialize(serializers.ModelSerializer):
    class Meta:
        model = ChoiseEat
        fields = '__all__'


class EatSerialize(serializers.ModelSerializer):
    choice = ChoiseSerialize()

    class Meta:
        model = Eat
        fields = '__all__'


class SurveySerialize(serializers.ModelSerializer):
    user_id = ProfileSerialize()
    eat = EatSerialize()

    class Meta:
        model = Survey
        fields = '__all__'


class WorkSerialize(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = '__all__'


class EmptionsSerialize(serializers.ModelSerializer):
    class Meta:
        model = Emptions
        fields = '__all__'


class DrinkSerialize(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = '__all__'
