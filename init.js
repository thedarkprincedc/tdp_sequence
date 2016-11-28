'use strict';
require.config({
	paths: {
		"jquery" : "js/vendor/backbone.marionette/jquery",
		"underscore" : "js/vendor/lodash",
		"backbone" : "js/vendor/backbone.marionette/backbone",
		"backbone.radio" : "js/vendor/backbone.marionette/backbone.radio",
		"backbone.marionette" : "js/vendor/backbone.marionette/backbone.marionette",
		"what-input" : "js/vendor/what-input",
		"foundation" : "js/vendor/foundation",
		"App" : "js/app",
		"diagramCollection" : "js/models/diagramCollection"
	}, 
	shim: {
		backbone : {
			deps : ['jquery','underscore'],
			exports : 'backbone'
		},
		underscore : {
			exports : '_'
		}
	}
});
requirejs(['js/main']);