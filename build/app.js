// For any third party dependencies, like jQuery, place them in the lib folder.
'use strict';
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
require.config({
    paths: {
        "jquery" : "js/vendor/jquery",
        "underscore" : "js/vendor/lodash",
        "raphael" : "js/vendor/raphael",
        "sequence" : "js/vendor/sequence",
        "foundation" : "js/vendor/foundation",
        "what-input" : "js/vendor/what-input",
        "text" : "js/vendor/text",
        "json2" : "js/vendor/backbone.marionette/json2",
        "backbone" : "node_modules/backbone/backbone",
        "handlebars" : "node_modules/handlebars/dist/handlebars",
        "marionette" : "node_modules/backbone.marionette/lib/backbone.marionette",
        "backbone.radio" : "node_modules/backbone.radio/build/backbone.radio",
        "backbone.handlebars" : "node_modules/Backbone.Marionette.Handlebars/backbone.marionette.handlebars",
        "router" : "js/router",
        "controller" : "js/controller",
        //"form" : "js/modules/form",
        "portal" : "js/portal",
        "Init" : "js/main"
    },
     
    /*map : {
         '*': {
      'backbone.wreqr': 'backbone.radio'
        }
    },*/
    shim: {
        jquery : {
            exports : "jQuery"
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {  
            deps: ['jquery', 'underscore', 'backbone',  "backbone.handlebars"],
            exports: 'Marionette'
        },
        "backbone.handlebars" : {
            exports : "backbone.handlebars"
        }

        /*
        "raphael" : {
            exports : "Raphael"
        },
        "sequence" : {
            deps : ["underscore" ,"raphael", "sequence"]
        },
    	"Init" : {
            deps : ["jquery", "sequence", "underscore", "backbone-radio", "marionette"]
    	} */ 
    }
    
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(["Init"]);