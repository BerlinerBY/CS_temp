from django.contrib import admin
from .models import Collection, Item

class Admin(admin.ModelAdmin):
    readonly_fields = ["slug",]

admin.site.register(Collection, Admin)
admin.site.register(Item, Admin)