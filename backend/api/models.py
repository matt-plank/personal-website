from django.db import models


class File(models.Model):
    """A file that can be uploaded to the server."""

    file = models.FileField(blank=False, null=False, upload_to="files/")
    file_name = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        return f"{self.file_name}"


class Project(models.Model):
    """A project that I want to display."""

    name = models.CharField(max_length=100)
    description = models.TextField()
    link = models.CharField(max_length=100)
    image = models.ForeignKey(File, on_delete=models.DO_NOTHING, blank=True, null=True)
    technologies = models.ManyToManyField("Technology")

    def __str__(self):
        return f"{self.name}"


class Technology(models.Model):
    """A technology associated with a project."""

    name = models.CharField(max_length=100)
    link = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name}"
