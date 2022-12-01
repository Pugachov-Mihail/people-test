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
    student = models.BooleanField(default=False, null=True, blank=True, verbose_name="Студент")
    university = models.TextField(null=True, blank=True, verbose_name="Университет")
    gender_info = models.TextField(choices=gender, default="men", null=True, blank=True, verbose_name="Пол")

    def __str__(self):
        return f"{self.gender} {self.age} {self.date_of_filling_in} {self.student} {self.university} {self.gender_info}"

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = "Пользователи"


class Survey(models.Model):
    """Опрос"""
    CHOISE = (
        (1, "Неглубокая тарелка"),
        (2, "Суповая тарелка"),
        (3, "1 шт"),
        (4, "2 шт"),
        (5, "3 шт"),
        (6, "1 порция(300 гр)"),
        (7, "2 порции(500 гр)"),
        (8, "3 порции"),
        (9, "салат (200 гр)"),
    )
    user_id = models.ForeignKey(Profile, on_delete=models.PROTECT, null=True, blank=True, )
    title = models.CharField(max_length=50, null=True, blank=True,
                             verbose_name="Размер порции", choices=CHOISE)
    date_create = models.DateTimeField(auto_created=True)
    eat = models.ForeignKey("Eat", on_delete=models.PROTECT, null=True, blank=True, verbose_name="Еда")

    class Meta:
        verbose_name = 'Опрос'
        verbose_name_plural = "Опросы"


class Eat(models.Model):
    """Еда"""
    title = models.CharField(max_length=50, null=True, blank=True,
                             verbose_name="Наименование продукта")
    meal_time = models.DateField(null=True, blank=True, verbose_name="Время приема пищи")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Еда'
        verbose_name_plural = "Еда"


class Work(models.Model):
    """Вид деятельности человека"""
    user_id = models.ForeignKey(Profile, on_delete=models.PROTECT, null=True, blank=True, )
    title = models.CharField(null=True, blank=True, max_length=150)
    other = models.TextField(null=True, blank=True, )

    class Meta:
        verbose_name = 'Тип работы'
        verbose_name_plural = "Типы работы"


class Emptions(models.Model):
    """Испытываемые эмоцц"""
    user_id = models.ForeignKey(Profile, on_delete=models.PROTECT, null=True, blank=True, )
    title = models.CharField(max_length=70, null=True, blank=True, )

    class Meta:
        verbose_name = 'Эмоции'
        verbose_name_plural = "Эмоции"


class Drink(models.Model):
    """Напитки """
    CHOISE = (
        ("YES", "Да"),
        ("NO", "Нет")
    )
    title = models.CharField(max_length=80, null=True, blank=True, choices=CHOISE, default="No")
    other = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Напиток'
        verbose_name_plural = "Напитки"
