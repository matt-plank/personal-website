from django.http import FileResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import File


class ResumeView(APIView):
    """A view for retrieving the resume."""

    def get(self, request):
        """Return the resume file."""
        resume = File.objects.filter(name="Resume").first()

        if resume is None:
            return Response({"message": "Resume not found"}, status=404)

        return FileResponse(resume.file, as_attachment=True, filename="resume.pdf")
