from django.urls import path

from .views import ContactView

urlpatterns = [
    path("message", ContactView.as_view()),
]
