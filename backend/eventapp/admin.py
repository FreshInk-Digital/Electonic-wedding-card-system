from django.contrib import admin
from . import models


@admin.register(models.Event)
class EventAdmin(admin.ModelAdmin):
  list_display = ['name', 'date', 'location', 'description', 'organizer']
  list_per_page = 10


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
  list_display = ['name', 'phone_number', 'role']
  list_per_page = 10


@admin.register(models.Coordinator)
class CoordinatorAdmin(admin.ModelAdmin):
  list_display = ['event', 'user']


@admin.register(models.Contribution)
class ContributionAdmin(admin.ModelAdmin):
  list_display = ['user', 'event', 'class_type', 'amount', 'amount_paid', 'payment_method', 'status', 'contributed_at']
  list_editable = ['amount_paid']
  list_per_page = 10


@admin.register(models.Invitation)
class InvitationAdmin(admin.ModelAdmin):
  list_display = ['guest_name', 'event', 'contact_info', 'status']
  list_per_page = 10

@admin.register(models.Notification)
class NotificationAdmin(admin.ModelAdmin):
  list_display = ['user', 'event', 'message', 'type', 'sent_at']