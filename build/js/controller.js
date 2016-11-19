
/*jslint node: true, nomen: true, unparam: true */
/*global jquery, _, $, define */

'use strict';

define(['backbone', 'marionette', 'js/views/mainlayout'], function (Backbone, Marionette, MainLayout) {
	var mainlayouta = new MainLayout();
	return Backbone.Marionette.Object.extend({

		mainwindow : function(){

		},
		userguide : function(){
			
			//
			console.log("showUserGuides");
		},
		loadApplet : function(){
			mainlayouta.render();
			console.log("loadApplet");
		}
	});
});