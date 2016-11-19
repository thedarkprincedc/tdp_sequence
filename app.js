'use strict';
require.config({
	paths: {
		"jquery" : "js/vendor/backbone.marionette/jquery",
		"underscore" : "js/vendor/lodash",
		"backbone" : "js/vendor/backbone.marionette/backbone",
		"backbone.radio" : "js/vendor/backbone.marionette/backbone.radio",
		"backbone.marionette" : "js/vendor/backbone.marionette/backbone.marionette",
		"Raphael" : "js/vendor/raphael",
		"sequence" : "js/vendor/sequence",
		"what-input" : "js/vendor/what-input",
		"foundation" : "js/vendor/foundation"
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