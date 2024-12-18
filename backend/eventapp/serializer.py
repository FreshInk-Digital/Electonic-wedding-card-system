from rest_framework import serializers
from .models import User, Event, Contribution, Coordinator, Invitation, Notification

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'user_id', 'name', 'phone_number', 'role', 'language_preference', 
            'created_at', 'updated_at', 'is_active', 'is_staff'
        ]
        read_only_fields = ['created_at', 'updated_at']

class EventSerializer(serializers.ModelSerializer):
    organizer_name = serializers.CharField(source='organizer.name', read_only=True)

    class Meta:
        model = Event
        fields = [
            'event_id', 'name', 'date', 'location', 'description', 
            'organizer', 'organizer_name', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']

class ContributionSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.name', read_only=True)
    event_name = serializers.CharField(source='event.name', read_only=True)

    class Meta:
        model = Contribution
        fields = [
            'contribution_id', 'event', 'event_name', 'user', 'user_name', 
            'amount', 'amount_paid', 'status', 'payment_method', 'class_type', 
            'contributed_at'
        ]
        read_only_fields = ['contributed_at']

class CoordinatorSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.name', read_only=True)
    event_name = serializers.CharField(source='event.name', read_only=True)

    class Meta:
        model = Coordinator
        fields = [
            'coordinator_id', 'event', 'event_name', 'user', 'user_name'
        ]
        read_only_fields = ['event_name', 'user_name']

class InvitationSerializer(serializers.ModelSerializer):
    event_name = serializers.CharField(source='event.name', read_only=True)

    class Meta:
        model = Invitation
        fields = [
            'invitation_id', 'event', 'event_name', 'guest_name', 
            'contact_info', 'status', 'sent_at'
        ]
        read_only_fields = ['sent_at']

class NotificationSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.name', read_only=True)
    event_name = serializers.CharField(source='event.name', read_only=True)

    class Meta:
        model = Notification
        fields = [
            'notification_id', 'user', 'user_name', 'event', 'event_name', 
            'message', 'type', 'status', 'sent_at'
        ]
        read_only_fields = ['sent_at']
