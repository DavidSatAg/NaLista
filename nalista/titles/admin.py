from django.contrib import admin
from .models import Title


class TitleAdmin(admin.ModelAdmin):
    list_display = ('title_id', 'title', 'type', 'poster_image', 'rating', 'images', 'stars', 'genres')


admin.site.register(Title, TitleAdmin)
