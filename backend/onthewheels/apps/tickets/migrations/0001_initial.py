# Generated by Django 4.0.1 on 2022-02-07 18:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stations', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bicycle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('serial_number', models.CharField(db_index=True, max_length=255, unique=True)),
                ('station', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='stations', to='stations.station')),
            ],
            options={
                'verbose_name_plural': 'Bicycles',
            },
        ),
    ]
