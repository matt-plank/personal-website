# Generated by Django 4.2.1 on 2023-05-18 20:52

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0005_remove_file_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="file",
            name="file_name",
            field=models.CharField(default="", max_length=100),
            preserve_default=False,
        ),
    ]