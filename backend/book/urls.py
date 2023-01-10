from rest_framework import routers

from views import views

router = routers.DefaultRouter()
router.register('', views.BookViewSet, basename='book')
urlpatterns = router.urls
print(urlpatterns)

