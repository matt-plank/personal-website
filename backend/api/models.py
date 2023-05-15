from django.db import models


class File(models.Model):
    """A file that can be uploaded to the server."""

    file = models.FileField(blank=False, null=False, upload_to="files/")
    name = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        return f"{self.name} - {self.file}"


class Project(models.Model):
    """A project that I want to display."""

    name = models.CharField(max_length=100)
    description = models.TextField()
    link = models.CharField(max_length=100)
    image = models.ForeignKey(File, on_delete=models.DO_NOTHING, null=True)

    def __str__(self):
        return f"{self.name}"
