from rest_framework import routers
from .views import CustomUserViewSet, CustomGroupViewSet

router = routers.SimpleRouter()
router.register('users', CustomUserViewSet, basename='users')
router.register('groups', CustomGroupViewSet, basename='groups')


urlpatterns = []
urlpatterns += router.urls
