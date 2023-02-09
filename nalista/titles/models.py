from django.db import models

# Create your models here.
class Title(models.Model):
    title_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    poster_image = models.URLField(max_length=255)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    images = models.URLField(max_length=7000)
    stars = models.CharField(max_length=255)
    genres = models.CharField(max_length=255)
    plot = models.CharField(max_length=1023, null=True)

    def to_dict_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'title_id': self.title_id,
            'type': self.type,
            'poster_image': self.poster_image,
            'rating': self.rating,
            'images': self.stars,
            'genres': self.genres,
            'plot': self.plot
        }