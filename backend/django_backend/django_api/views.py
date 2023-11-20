from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse

from .models import Collection, Item
from .serializers import CollectionSerializer, ItemSerialiazer

class CollectionsView(generics.ListCreateAPIView):
    """All collections"""
    name="collections_view"
    
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer


class CollectionView(generics.RetrieveUpdateAPIView):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

class CollectionDestroy(generics.DestroyAPIView):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer

class ItemsView(generics.ListCreateAPIView):
    """All items"""
    name="items_view"

    queryset = Item.objects.all()
    serializer_class = ItemSerialiazer

class ItemView(generics.RetrieveUpdateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerialiazer

class ItemDestroy(generics.DestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerialiazer

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