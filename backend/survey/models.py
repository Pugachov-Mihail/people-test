from django.db import models


class Drink(models.Model):
    """Напиток"""
    title = models.CharField('наименование напитка', max_length=80)
    answer = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'напиток'
        verbose_name_plural = "напитки"


class Portion(models.Model):
    """Размер порции"""
    title = models.CharField('размер порции', max_length=50)
    answer = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'порция'
        verbose_name_plural = "порции"

    def __str__(self):
        return self.title


class Eat(models.Model):
    """Еда"""
    title = models.CharField('наименование продукта', max_length=50, null=True, blank=True)
    answer = models.BooleanField(default=False)
    portion = models.ForeignKey(Portion, on_delete=models.CASCADE, verbose_name='порция', blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'еда'
        verbose_name_plural = "еда"


class Question(models.Model):
    """Вопрос"""
    created = models.DateTimeField('дата создания', auto_now=True)
    title = models.CharField('вопрос', max_length=50, null=True, blank=True)

    class Meta:
        verbose_name = 'вопрос'
        verbose_name_plural = "вопросы"

    def __str__(self):
        return self.title


class Answer(models.Model):
    """Ответ"""
    question = models.ForeignKey(Question, on_delete=models.CASCADE, verbose_name='вопрос')
    answer = models.TextField('ответ', max_length=500, blank=True, null=True)
    eats = models.ManyToManyField(Eat, blank=True, verbose_name="еда", related_name='eats', )
    drinks = models.ManyToManyField(Drink, blank=True, verbose_name='напитки', related_name='drinks')
    data = models.DateField('дата', blank=True)
    time = models.TimeField('время', null=True)
    other = models.BooleanField('другое', default=False)

    class Meta:
        verbose_name = 'ответы'
        verbose_name_plural = 'ответы'


class Quiz(models.Model):
    """Опрос, например: Дневник питания"""
    title = models.CharField('название', max_length=100)
    question = models.ManyToManyField(Question, verbose_name='вопросы')

    class Meta:
        verbose_name = 'опрос'
        verbose_name_plural = 'опросы'
