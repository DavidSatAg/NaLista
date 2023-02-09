from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .service import title_svc
from ..commons.django_views_utils import ajax_login_required
import json
# Create your views here.

@ajax_login_required
def list_titles(request):
    titles = title_svc.list_titles()
    return JsonResponse(({"titles": titles}))

@csrf_exempt
@ajax_login_required
def add_title(request):
    # title = title_svc.add_title("tt4501242",
    # "Agents of shield",
    # "TvSeries",
    # "https://m.media-amazon.com/images/M/MV5BMWYwMzY1NmYtNDBiNC00OGE5LThmYTAtZWU0MTljMzIzYmI3XkEyXkFqcGdeQXVyMDM0MzU2NA@@._V1_Ratio0.7027_AL_.jpg",
    # "7.8",
    # "Fotinho",
    # "Clark Gregg",
    # "Fiction",
    # "historinha"
    # )
    # breakpoint()
    title = title_svc.add_title(
    request.POST.get("title_id"),
    request.POST.get("title"),
    request.POST.get("type"),
    request.POST.get("image"),
    request.POST.get("imDbRating"),
    request.POST.get("images"),
    request.POST.get("stars"),
    request.POST.get("genres"),
    request.POST.get("plot"),
    )
    return JsonResponse(title)

def delete_title(request):
    title = title_svc.delete_title(
        json.loads(request.body.decode()),
    )
    return JsonResponse(title, safe=False)

def get_title_info(request):
    title = title_svc.get_title_info(
        json.loads(request.body.decode())
    )
    return JsonResponse(title)