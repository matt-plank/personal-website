# Generated by Django 4.2.1 on 2023-05-18 20:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0002_alter_project_image"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="file",
            name="name",
        ),
        migrations.AlterField(
            model_name="file",
            name="file",
            field=models.FileField(upload_to="static/files/"),
        ),
    ]