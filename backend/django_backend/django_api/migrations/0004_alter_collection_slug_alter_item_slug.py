# Generated by Django 4.2.7 on 2023-11-15 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_api', '0003_alter_collection_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collection',
            name='slug',
            field=models.SlugField(blank=True, unique=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='slug',
            field=models.SlugField(blank=True, max_length=255, unique=True),
        ),
    ]