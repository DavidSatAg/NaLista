from django.urls import path

from . import views

urlpatterns = [
    path("list", views.list_titles),
    path("add", views.add_title),
    path("delete", views.delete_title),
    path("getinfo", views.get_title_info),
    path("titlescounter", views.get_number_of_titles),
]
