from django.urls import path

from .views import FileView, ProjectView

urlpatterns = [
    path("files/<str:name>", FileView.as_view()),
    path("projects", ProjectView.as_view()),
]
