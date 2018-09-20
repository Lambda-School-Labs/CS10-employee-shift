# Generated by Django 2.1.1 on 2018-09-20 17:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logo', models.URLField()),
                ('company', models.CharField(max_length=200)),
                ('enabled', models.BooleanField(default=True)),
                ('plan_expires', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Availability',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.CharField(choices=[('M', 'Monday'), ('T', 'Tuesday'), ('W', 'Wednesday'), ('R', 'Thursday'), ('F', 'Friday'), ('S', 'Saturday'), ('U', 'Sunday')], default='M', max_length=1)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='HourOfOperation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.CharField(choices=[('M', 'Monday'), ('T', 'Tuesday'), ('W', 'Wednesday'), ('R', 'Thursday'), ('F', 'Friday'), ('S', 'Saturday'), ('U', 'Sunday')], default='M', max_length=1)),
                ('open_time', models.TimeField()),
                ('close_time', models.TimeField()),
                ('account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shiftapp.Account')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone_number', models.CharField(max_length=14)),
                ('notes', models.TextField(max_length=400)),
                ('account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shiftapp.Account')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='RequestedTimeOff',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_datetime', models.DateField()),
                ('end_datetime', models.DateField()),
                ('reason', models.CharField(max_length=200)),
                ('status', models.CharField(choices=[('P', 'Pending'), ('C', 'Canceled'), ('A', 'Accepted'), ('E', 'Expired')], default='P', max_length=1)),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shiftapp.Profile')),
            ],
        ),
        migrations.CreateModel(
            name='Shift',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_datetime', models.DateField()),
                ('end_datetime', models.DateField()),
                ('notes', models.TextField(max_length=400)),
                ('is_open', models.BooleanField(default=True)),
                ('account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shiftapp.Account')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shiftapp.Profile')),
            ],
        ),
        migrations.AddField(
            model_name='availability',
            name='profile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='shiftapp.Profile'),
        ),
    ]
