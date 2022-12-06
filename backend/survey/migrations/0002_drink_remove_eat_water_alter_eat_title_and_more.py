# Generated by Django 4.1.3 on 2022-11-27 13:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('survey', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Drink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, choices=[('YES', 'Да'), ('NO', 'Нет')], default='No', max_length=80, null=True)),
                ('other', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='eat',
            name='water',
        ),
        migrations.AlterField(
            model_name='eat',
            name='title',
            field=models.CharField(blank=True, choices=[(1, 'Неглубокая тарелка'), (2, 'Суповая тарелка'), (3, '1 шт'), (4, '2 шт'), (5, '3 шт'), (6, '1 порция(300 гр)'), (7, '2 порции(500 гр)'), (8, '3 порции'), (9, 'салат (200 гр)')], max_length=50, null=True, verbose_name='Название пищи, напитка'),
        ),
        migrations.AlterField(
            model_name='eat',
            name='drink',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='survey.drink'),
        ),
    ]
