# Generated by Django 4.0.5 on 2023-02-08 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('titles', '0002_title_plot'),
    ]

    operations = [
        migrations.AlterField(
            model_name='title',
            name='images',
            field=models.URLField(max_length=7000),
        ),
    ]