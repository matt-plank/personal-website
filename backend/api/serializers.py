from rest_framework import serializers

from .models import Project, Technology


class TechnologySerializer(serializers.ModelSerializer):
    """Serializes a technology."""

    class Meta:
        model = Technology
        fields = ("name", "link")


class ProjectSerializer(serializers.ModelSerializer):
    """Serializes a project."""

    imageFileName = serializers.SerializerMethodField()

    def get_imageFileName(self, obj):
        if obj.image is None:
            return None

        return obj.image.file_name

    technologies = TechnologySerializer(many=True)

    class Meta:
        model = Project
        fields = ("name", "description", "link", "imageFileName", "technologies")
