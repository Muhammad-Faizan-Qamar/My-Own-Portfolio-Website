from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('login/',views.login,name="login"),
    path('sign-up/',views.signup,name="sign-up"),
     path('home/',views.home,name="home"),
    path('about/',views.about,name="about"),
    path('services/',views.services,name="services"),
    path('development/',views.development,name="development"),
    path('design/',views.design,name="design"),
    path('marketing/',views.marketing,name="marketing"),
    path('projects/',views.projects,name="projects"),
    path('contact/',views.contact,name="contact"),
    path('search-bar/', views.searchBar, name="search-bar")
]