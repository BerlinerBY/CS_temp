from django.db import models
from django.utils.text import slugify

class Collection(models.Model):
    title = models.CharField(max_length=75, unique=True)
    date_of_creation = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(unique=True, blank=True)
    
    class Meta:
        verbose_name = 'collection'
        verbose_name_plural = 'collections'

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Collection, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

class Item(models.Model):
    title = models.CharField(max_length=100, blank=False, default="")
    collection = models.ForeignKey(Collection, 
                                   on_delete=models.CASCADE,
                                   related_name='items')
    url_field = models.URLField(max_length=300, blank=False)
    description = models.CharField(max_length=350, blank=True, default="")
    date_of_saving = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(unique=True, max_length=255, blank=True)

    class Meta:
        ordering = ('date_of_saving',)
        verbose_name = 'item'
        verbose_name_plural = 'items'

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Item, self).save(*args, **kwargs)

    def __str__(self):
        return self.title