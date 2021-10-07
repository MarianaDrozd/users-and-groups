from rest_framework import viewsets

from usersgroups.api.serializers import CustomGroupSerializer, CustomUserSerializer, CustomGroupDetailSerializer
from usersgroups.models import CustomGroup, CustomUser


class CustomGroupViewSet(viewsets.ModelViewSet):
    queryset = CustomGroup.objects.all()
    serializer_class = CustomGroupSerializer

    action_to_serializer = {
        "retrieve": CustomGroupDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

