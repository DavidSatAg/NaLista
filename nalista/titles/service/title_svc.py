from ..models import Title


def add_title(
                new_title_id,
                new_title,
                new_type,
                new_poster_image,
                new_rating,
                new_images,
                new_stars,
                new_genres,
                new_plot
                ):
    title = Title(title_id = new_title_id,
                title = new_title,
                type = new_type,
                poster_image = new_poster_image,
                rating = new_rating,
                images = new_images,
                stars = new_stars,
                genres = new_genres,
                plot = new_plot
    )
    title.save()
    return title.to_dict_json()


def list_titles():
    titles = Title.objects.all()
    return [title.to_dict_json() for title in titles]


def delete_title(id):
    Title.objects.filter(pk=id["id"]).delete()
    return {"deleted_item": id}


def get_title_info(id):
    title = Title.objects.filter(pk=id["id"]).first()
    return title.to_dict_json()

def get_number_of_titles():
    number_of_titles = Title.objects.count()
    return number_of_titles