from django.urls import path

from .views import FileView

urlpatterns = [
    path("files/<str:name>", FileView.as_view()),
]
