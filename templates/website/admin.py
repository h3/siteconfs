# -*- coding: utf-8 -*-

from django.conf import settings
from django.contrib import admin
#from django.utils.translation import ugettext_lazy as _
#from webcore.utils.admin import AdminThumbnailMixin
from grappellifit.admin import TranslationAdmin #, TranslationStackedInline
from website.models import *


#class MyModelAdmin(AdminThumbnailMixin, TranslationAdmin):
#    list_display = ('title', 'position', 'is_visible')
#    list_editable = ('position', 'is_visible')
#    prepopulated_fields = {"slug": ("title",)}
#    class Media:
#        js = [
#            '/static/grappelli/tinymce/jscripts/tiny_mce/tiny_mce.js',
#            '/static/website/js/tinymce_setup.js',
#        ]
#admin.site.register(MyModel, MyModelAdmin)
