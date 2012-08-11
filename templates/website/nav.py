# -*- coding: utf-8 -*-

from django.utils.translation import ugettext_lazy as _
from django_nav.base import nav_groups, Nav, NavOption
from django.core.urlresolvers import reverse


class HomeNav(Nav):
    name = _('Home')
    view = 'website-home'
    nav_group = 'main-nav'


#class TestimonialsNav(Nav):
#    name = _('Testimonials')
#    view = 'company-testimonials-list'
#    nav_group = 'main-nav'


#class NewslyNav(Nav):
#    name = _('News')
#    view = 'newsly-index'
#    args = [1]
#    nav_group = 'main-nav'
#
#    def active_if(self, url, path):
#        return path.startswith('/news')


class ContactNav(Nav):
    name = _('Contact')
    view = 'website-contact'
    nav_group = 'main-nav'


nav_groups.register([
    HomeNav,
#   NewslyNav,
#   TestimonialsNav,
    ContactNav,
])
