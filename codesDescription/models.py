from pyexpat import model
from django.db import models

class LeetCode(models.Model):
    name = models.CharField(
        max_length=250
    )
    language = models.CharField(
        max_length=20
    )
    topics = models.CharField(
        max_length=100
    )
    link = models.URLField(

    )
    notes = models.TextField(
        null=True, blank=True
    )

    def __str__(self):
        return f"{self.name}"

class Question(models.Model):
    # PROBLEM_TYPES = (
    #     ('Hard', 'Hard'),
    #     ('Medium', 'Medium'),
    #     ('Easy', 'Easy'),
    # )
    visitor = models.CharField(
        max_length=20
    )
    problem_name = models.CharField(
        max_length=250
    )
    # difficulty = models.CharField(
    #     choices=PROBLEM_TYPES, max_length=6
    # )
    question = models.TextField(

    )

    def __str__(self):
        return self.problem_name
