# Generated by Django 4.2.1 on 2023-05-18 20:47

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0004_file_name_alter_file_file"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="file",
            name="name",
        ),
    ]
