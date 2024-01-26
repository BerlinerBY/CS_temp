from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .models import Collection, Item
from .serializers import CollectionSerializer, ItemSerialiazer

### COLLECTIONS
class CollectionsView(generics.ListCreateAPIView):
    """All collections"""
    name="collections_view"
    
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer


class CollectionView(generics.RetrieveAPIView):
    """A collection (GET)"""
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

class CollectionUpdate(generics.UpdateAPIView):
    """A collection (PUT and PATCH)"""
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

class CollectionDestroy(generics.DestroyAPIView):
    """Destroy a collection (DELETE)"""
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

### ITEMS
class ItemsView(generics.ListCreateAPIView):
    """Get all items or create (GET and POST)"""
    name="items_view"

    queryset = Item.objects.all()
    serializer_class = ItemSerialiazer

class ItemView(generics.RetrieveAPIView):
    """An item (GET)"""
    queryset = Item.objects.all()
    serializer_class = ItemSerialiazer

class ItemUpdate(generics.UpdateAPIView):
    """Update an item (PUT and PATCH)"""
    queryset = Item.objects.all()
    serializer_class = ItemSerialiazer

class ItemDestroy(generics.DestroyAPIView):
    """Destroy an item (DELETE)"""
    queryset = Item.objects.all()
    serializer_class = ItemSerialiazer

### OTHER
class ItemsByCollection(generics.ListAPIView):
    serializer_class = ItemSerialiazer

    def get_queryset(self):
        collection = self.kwargs.get('id')
        queryset = Item.objects.filter(collection=collection)

        return queryset

class ApiRoot(generics.GenericAPIView):
    name = 'api-root'

    def get(self, request, *args, **kwargs):
        return Response(
            {
                'collections': reverse(CollectionsView.name, request=request),
                'items': reverse(ItemsView.name, request=request)
            }
        )