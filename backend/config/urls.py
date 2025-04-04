from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),

    # accounts
    path('accounts/', include('accounts.urls')),
    path('vehicles/', include('car_listings.urls')),

    # auth
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/social/', include('allauth.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)