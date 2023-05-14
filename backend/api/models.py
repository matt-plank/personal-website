from django.db import models


class File(models.Model):
    """A file that can be uploaded to the server."""

    file = models.FileField(blank=False, null=False, upload_to="files/")
    name = models.CharField(max_length=100, blank=False, null=False)

    def __str__(self):
        """Return the name of the file."""
        return f"{self.name} - {self.file}"
