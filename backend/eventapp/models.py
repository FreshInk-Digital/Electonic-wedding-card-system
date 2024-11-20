from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils.timezone import now


class UserManager(BaseUserManager):
    """
    Custom manager for User model with admin and normal user creation.
    """
    def create_user(self, phone_number, name, role=None, password=None, **extra_fields):
        if not phone_number:
            raise ValueError("The phone number must be set")
        extra_fields.setdefault('is_active', True)
        extra_fields['role'] = role  # Ensure role is set in extra_fields
        user = self.model(phone_number=phone_number, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, phone_number, name, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields['role'] = 'Admin'  # Set the role explicitly
        return self.create_user(phone_number, name, password=password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    """
    User model representing all users in the system.
    """
    ROLE_CHOICES = [
        ('Admin', 'Admin'),
        ('Organizer', 'Organizer'),
        ('Coordinator', 'Coordinator'),
    ]

    LANGUAGE_CHOICES = [
        ('Swahili', 'Swahili'),
        ('English', 'English'),
    ]

    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, help_text="Full name of the user")
    phone_number = models.CharField(max_length=15, unique=True, help_text="Unique phone number for login")
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, help_text="Role of the user in the system")
    password = models.CharField(max_length=128)  # Handled by AbstractBaseUser
    language_preference = models.CharField(
        max_length=10, choices=LANGUAGE_CHOICES, default='English', help_text="Preferred language for the user"
    )
    created_at = models.DateTimeField(default=now, help_text="Timestamp of account creation")
    updated_at = models.DateTimeField(auto_now=True, help_text="Timestamp of the last update")

    is_active = models.BooleanField(default=True, help_text="Designates whether the user is active")
    is_staff = models.BooleanField(default=False, help_text="Designates whether the user can log into the admin site")

    # Explicitly define related_name for permissions
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='eventapp_users',  # Avoids conflict with auth.User
        blank=True,
        help_text="The groups this user belongs to."
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='eventapp_user_permissions',  # Avoids conflict with auth.User
        blank=True,
        help_text="Specific permissions for this user."
    )

    objects = UserManager()

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['name', 'role']

    def __str__(self):
        return f"{self.name} ({self.role})"

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
        ordering = ['-created_at']

class Event(models.Model):
    """
    Represents a wedding event.
    """
    event_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    date = models.DateField()
    location = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    organizer = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="organized_events"
    )
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.date})"

    class Meta:
        verbose_name = "event"
        verbose_name_plural = "events"
        ordering = ["-date", "name"]


class Contribution(models.Model):
  """
  Tracks monetary contributions and pledges for an event.
  """
  PAYMENT_METHOD_CHOICES = [
      ('Mobile Money', 'Mobile Money'),
      ('Bank Transfer', 'Bank Transfer'),
      ('Crypto', 'Crypto'),
      ('Cheque', 'Cheque'),
      ('Cash', 'Cash'),
  ]

  STATUS_CHOICES = [
      ('Paid', 'Paid'),
      ('Pending', 'Pending'),
  ]

  CLASS_CHOICES = [
      ('Ahadi', 'Ahadi (Pledge)'),
      ('Contribution', 'Contribution'),
  ]

  contribution_id = models.AutoField(primary_key=True)
  event = models.ForeignKey(
      'Event', on_delete=models.CASCADE, related_name='contributions'
  )
  user = models.ForeignKey(
      'User', on_delete=models.CASCADE, related_name='user_contributions'
  )
  amount = models.DecimalField(max_digits=10, decimal_places=2)
  amount_paid = models.DecimalField(
      max_digits=10, decimal_places=2, default=0.00,
      help_text="Actual amount paid by the user."
  )
  status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Pending')
  payment_method = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES)
  class_type = models.CharField(
      max_length=20, choices=CLASS_CHOICES, default='Contribution',
      help_text="Classifies the record as either a Pledge (Ahadi) or a Contribution."
  )
  contributed_at = models.DateTimeField(default=now)

  def __str__(self):
      return f"Contribution by {self.user.name} to {self.event.name} - {self.amount_paid}/{self.amount} ({self.status}, {self.class_type})"

  class Meta:
      verbose_name = "contribution"
      verbose_name_plural = "contributions"
      ordering = ['-contributed_at']


class Coordinator(models.Model):
    """
    Tracks coordinators assigned to an event.
    """
    coordinator_id = models.AutoField(primary_key=True)
    event = models.ForeignKey(
        'Event', on_delete=models.CASCADE, related_name='coordinators'
    )
    user = models.ForeignKey(
        'User', on_delete=models.CASCADE, related_name='coordinator_roles'
    )

    def __str__(self):
        return f"{self.user.name} - Coordinator for {self.event.name}"

    class Meta:
        verbose_name = "coordinator"
        verbose_name_plural = "coordinators"
        unique_together = ('event', 'user')  # Ensures no duplicate assignments
        ordering = ['event']


class Invitation(models.Model):
    """
    Manages digital invitations for an event.
    """
    STATUS_CHOICES = [
        ('Sent', 'Sent'),
        ('Pending', 'Pending'),
    ]

    invitation_id = models.AutoField(primary_key=True)
    event = models.ForeignKey(
        'Event', on_delete=models.CASCADE, related_name='invitations'
    )
    guest_name = models.CharField(max_length=255)
    contact_info = models.CharField(max_length=50, help_text="Phone number or email address of the guest.")
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Pending')
    sent_at = models.DateTimeField(null=True, blank=True, help_text="Timestamp when the invitation was sent.")

    def __str__(self):
        return f"Invitation for {self.guest_name} to {self.event.name} ({self.status})"

    class Meta:
        verbose_name = "invitation"
        verbose_name_plural = "invitations"
        ordering = ['-sent_at', 'guest_name']


class Notification(models.Model):
    """
    Handles reminders and notifications for users.
    """
    TYPE_CHOICES = [
        ('Reminder', 'Reminder'),
        ('Update', 'Update'),
        ('Alert', 'Alert'),
    ]

    STATUS_CHOICES = [
        ('Unread', 'Unread'),
        ('Read', 'Read'),
    ]

    notification_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        'User', on_delete=models.CASCADE, related_name='notifications'
    )
    event = models.ForeignKey(
        'Event', on_delete=models.SET_NULL, null=True, blank=True, related_name='notifications'
    )
    message = models.TextField()
    type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='Reminder')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Unread')
    sent_at = models.DateTimeField(default=now)

    def __str__(self):
        return f"Notification for {self.user.name} - {self.type} ({self.status})"

    class Meta:
        verbose_name = "notification"
        verbose_name_plural = "notifications"
        ordering = ['-sent_at']
