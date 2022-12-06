# Generated by Django 4.1.3 on 2022-11-27 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0002_drink_remove_eat_water_alter_eat_title_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='eat',
            name='title',
        ),
        migrations.AlterField(
            model_name='survey',
            name='title',
            field=models.CharField(blank=True, choices=[(1, 'Неглубокая тарелка'), (2, 'Суповая тарелка'), (3, '1 шт'), (4, '2 шт'), (5, '3 шт'), (6, '1 порция(300 гр)'), (7, '2 порции(500 гр)'), (8, '3 порции'), (9, 'салат (200 гр)')], max_length=50, null=True, verbose_name='Название пищи, напитка'),
        ),
    ]
