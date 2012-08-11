# -*- coding: utf-8 -*-

from django.core.urlresolvers import reverse
from django.shortcuts import get_object_or_404
from django.views.generic import TemplateView

from website.models import *


class HomeView(TemplateView):
    template_name = 'website/home.html'


class ContactView(TemplateView):
    template_name = "website/contact.html"
