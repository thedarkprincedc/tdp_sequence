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
		/*
		'eve':          'js/vendor/raphael/eve',
  		'raphael.core': 'js/vendor/raphael/raphael.core',
  		'raphael.svg':  'js/vendor/raphael/raphael.svg',
  		'raphael.vml':  'js/vendor/raphael/raphael.vml',
  		"raphael":      "js/vendor/raphael/raphael.amd",
  		"sequence" : "js/vendor/sequence"*/
	}, 
	shim: {
		backbone : {
			deps : ['jquery','underscore'],
			exports : 'backbone'
		},
		underscore : {
			exports : '_'
		}/*,
		raphael : {
			deps : ['raphael.vml', 'raphael.svg', 'raphael.core', 'eve'],
			exports: 'Raphael'
		},
		sequence : {
			deps : ['raphael'],
			exports : "Sequence"
		}*/
	}
});
requirejs(['js/main']);