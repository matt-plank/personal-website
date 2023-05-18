import os

from django.http import FileResponse
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import File, Project
from .serializers import ProjectSerializer


class FileView(APIView):
    """Serves files managed by the database."""

    def get(self, request, name):
        """Return the file with the given name."""
        file = File.objects.filter(file_name=name).first()

        if not file:
            return Response({"message": "File not found."}, status=404)

        return FileResponse(file.file)


class ProjectView(APIView):
    """Serves projects managed by the database."""

    def get(self, request):
        """Return all projects."""
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
