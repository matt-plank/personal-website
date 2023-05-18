from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    """Serializes a project."""

    imageFileName = serializers.SerializerMethodField()

    def get_imageFileName(self, obj):
        if obj.image is None:
            return None

        return obj.image.file_name

    class Meta:
        model = Project
        fields = ("name", "description", "link", "imageFileName")
