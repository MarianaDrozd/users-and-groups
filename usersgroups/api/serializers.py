from rest_framework import serializers

from usersgroups.models import CustomGroup, CustomUser


class CustomGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomGroup
        fields = '__all__'


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'


class CustomGroupDetailSerializer(serializers.ModelSerializer):
    users = serializers.SerializerMethodField()

    class Meta:
        model = CustomGroup
        fields = '__all__'

    @staticmethod
    def get_users(obj):
        return CustomUserSerializer(CustomUser.objects.filter(group=obj), many=True).data
