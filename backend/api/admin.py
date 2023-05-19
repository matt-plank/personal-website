from django.contrib import admin

from .models import File, Project, Technology

admin.site.register(File)
admin.site.register(Project)
admin.site.register(Technology)
