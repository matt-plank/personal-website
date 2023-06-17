from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Message
from .validation import validate_email, validate_name


class ContactView(APIView):
    """Receives form data from the contact form."""

    def post(self, request):
        """Receive form data."""
        name = request.data.get("name")
        email = request.data.get("email")
        message = request.data.get("message")

        # Validate request
        if name is None or name == "" or not validate_name(name):
            return Response(
                {"error": "Invalid name."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if email is None or email == "" or not validate_email(email):
            return Response(
                {"error": "Invalid email."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if message is None or message == "":
            return Response(
                {"error": "Invalid message."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Save message to database
        Message.objects.create(
            name=name,
            email=email,
            message=message,
        )

        return Response(
            {"message": "Message sent successfully."},
            status=status.HTTP_201_CREATED,
        )
