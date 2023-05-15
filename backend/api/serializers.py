from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    """Serializes a project."""

    imageName = serializers.SerializerMethodField()

    def get_imageName(self, obj):
        return obj.image.name

    class Meta:
        model = Project
        fields = ("name", "description", "link", "imageName")
