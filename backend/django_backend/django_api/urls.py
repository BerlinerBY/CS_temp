from django.urls import path
from . import views

urlpatterns = [
    path("", views.ApiRoot.as_view()),

    path("collections/", views.CollectionsView.as_view(), name="collections_view"),
    path("collections/<int:pk>", views.CollectionView.as_view(), name="collection_view"),
    path("collections/update/<int:pk>", views.CollectionUpdate.as_view(), name='collection_update'),
    path("collections/delete/<int:pk>", views.CollectionDestroy.as_view(), name="collection_destroy"),
    
    path("items/", views.ItemsView.as_view(), name="items_view"),
    path("items/<int:pk>", views.ItemView.as_view(), name="item_view"),
    path("items/update/<int:pk>", views.ItemUpdate.as_view(), name="item_update"),
    path("items/delete/<int:pk>", views.ItemDestroy.as_view(), name="item_destroy"),

    path("collection/<int:id>", views.ItemsByCollection.as_view(), name="items_by_collection")
]
