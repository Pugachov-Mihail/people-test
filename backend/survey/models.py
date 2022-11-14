from django.db import models


# Create your models here.
class Profile(models.Model):
    gender = [
        ("men", 'Мужчина'),
        ("women", "Женщина")
    ]
    age = models.DateField(null=True, blank=True,
                           verbose_name="Возраст")
    date_of_filling_in = models.DateField(null=True, blank=True,
                                          verbose_name="Дата заполнения")
    student = models.BooleanField(default=False, null=True, blank=True,)
    university = models.TextField(null=True, blank=True,)
    gender_info = models.TextField(choices=gender, default="men", null=True, blank=True,)


class Survey(models.Model):
    """Опрос"""
    user_id = models.ForeignKey(Profile, on_delete=models.PROTECT, null=True, blank=True,)
    title = models.CharField(max_length=50, null=True, blank=True,)
    date_create = models.DateTimeField(auto_created=True)


class Eat(models.Model):
    """Еда"""
    survey_id = models.ForeignKey(Survey, on_delete=models.PROTECT, null=True, blank=True,)
    title = models.CharField(max_length=50, null=True, blank=True, verbose_name="Название пищи, напитка")
    water = models.PositiveIntegerField(null=True, blank=True,)
    meal_time = models.DateField(null=True, blank=True, verbose_name="Время приема пищи")
    drink = models.ForeignKey("Drink", on_delete=models.PROTECT, null=True, blank=True,)


class Work(models.Model):
    """Вид деятельности человека"""
    user_id = models.ForeignKey(Profile, on_delete=models.PROTECT, null=True, blank=True,)
    title = models.CharField(null=True, blank=True, max_length=150)
    other = models.TextField(null=True, blank=True,)


class Emptions(models.Model):
    """Испытываемые эмоцц"""
    user_id = models.ForeignKey(Profile, on_delete=models.PROTECT, null=True, blank=True,)
    title = models.CharField(max_length=70, null=True, blank=True,)


class Drink(models.Model):
    """Напитки """
    title = models.CharField(max_length=80, null=True, blank=True,)
    other = models.TextField(null=True, blank=True,)