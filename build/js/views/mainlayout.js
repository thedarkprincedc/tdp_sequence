
/*jslint node: true, nomen: true, unparam: true */
/*global jquery, _, $, define */

'use strict';

define(['backbone', 'marionette','text!../templates/mainlayout.html'], 
	function (Backbone, Marionette, template) {
	return Backbone.Marionette.View.extend({
		template:template,
		onShow: function(){
		 	this.$el.trigger('create');
            this.vent.trigger("show");
		}
	});
});