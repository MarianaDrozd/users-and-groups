from django.db import models
from django.contrib.auth.models import AbstractUser, Group


# Create your models here.
from django.utils import timezone


class CustomGroup(Group):

    EDIT = 'edit'
    DELETE = 'delete'

    ACTION_CHOICES = (
        (EDIT, 'Edit'),
        (DELETE, 'Delete')
    )
    description = models.TextField(max_length=150, blank=True, null=True)

    actions = models.CharField(choices=ACTION_CHOICES, default=EDIT, max_length=50)

    def __str__(self):
        return self.name


class CustomUser(AbstractUser):

    EDIT = 'edit'
    DELETE = 'delete'

    ACTION_CHOICES = (
        (EDIT, 'Edit'),
        (DELETE, 'Delete')
    )
    actions = models.CharField(choices=ACTION_CHOICES, default=EDIT, max_length=50)

    group = models.ForeignKey(
        CustomGroup,
        verbose_name="Group",
        on_delete=models.CASCADE,
        null=True)

    created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.username
