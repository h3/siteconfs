# -*- coding: utf-8 -*-

from django.db import models
#from django.core.urlresolvers import reverse
#from django.utils.translation import ugettext_lazy as _


#class MyModel(models.Model):
#    title       = models.CharField(_('Title'), max_length=255)
#    slug        = models.SlugField(_('Slug'), unique=True, max_length=50)
#    content     = models.TextField(_('Content'))
#    position    = models.PositiveIntegerField(_('Position'), default=0)
#    is_visible = models.BooleanField(_('Is Visible'),default=True)
#
#
#    class Meta:
#        ordering = ('position', 'title')
#
#    def __unicode__(self):
#        return "%s" % self.title
#
#    def get_absolute_url(self):
#        return reverse('website-mymodel', kwargs={'slug': self.slug})
