from . import views
from django.urls import path , include
urlpatterns = [
	path('' , views.getRoutes , name = 'home'),
	path('notes/', views.getNotes, name ="notes"),
	path('notes/get/<str:pk>/', views.getNote),
	path('notes/<str:pk>/update/', views.updateNote, name= 'update'),
path('notes/<str:pk>/delete/', views.deleteNote, name= 'delete'),
	path('notes/create/',views.createNote,name = 'create')



]
