from rest_framework import serializers
from .models import Collection, Item


class CollectionSerializer(serializers.ModelSerializer):
    """
    Serializing all the Collections
    """

    class Meta:
        model = Collection
        fields = (
            'id',
            'title',
            'date_of_creation',
            'slug'
        )

class ItemSerialiazer(serializers.ModelSerializer):
    """
    Serializing all Items
    """
    class Meta:
        model = Item
        fields = (
            'id',
            'title',
            'collection',
            'url_field',
            'description',
            'date_of_saving',
            'slug',
        )