# -*- coding: utf-8 -*-

from django.conf.urls.defaults import *
from django.views.generic import TemplateView

from website.views import *

urlpatterns=patterns('',
    url(r'^$', HomeView.as_view(), name='website-home'),
    url(r'^contact/$', ContactView.as_view() ,name="website-contact"),
)
