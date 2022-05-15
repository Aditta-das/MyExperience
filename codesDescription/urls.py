from django.urls import path
from codesDescription import views

urlpatterns = [
    path('codes/', views.LeetCodeList.as_view(), name='codes'),
    path('codes/<int:pk>/', views.LeetCodeDetail.as_view()),

    path('question/', views.QuestionList.as_view()),
]