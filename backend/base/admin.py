from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Brand)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(Bid)
admin.site.register(Order)
admin.site.register(UserAddress)
admin.site.register(UserPayment)

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "role", "created_at")
    list_filter = ("role",)
    search_fields = ("user_username", "user_email")
