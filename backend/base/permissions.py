from rest_framework.permissions import BasePermission


def get_role(user) -> str:
    if not user or not user.is_authenticated:
        return ""
    # superuser always admin
    if getattr(user, "is_superuser", False):
        return "admin"
    profile = getattr(user, "profile", None)
    return getattr(profile, "role", "")

class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return get_role(request.user) == "admin"

class IsSellerOrAdmin(BasePermission):
    def has_permission(self, request, view):
        return get_role(request.user) in ("seller", "admin")

class IsBuyerOrAdmin(BasePermission):
    def has_permission(self, request, view):
        return get_role(request.user) in ("buyer", "admin")