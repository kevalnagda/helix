from django.db import models


# Create your models here.

class Question(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()

    def _str_(self) -> str:
        return self.title