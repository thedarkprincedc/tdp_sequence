/*jslint node: true, nomen: true, unparam: true */
/*global jquery, _, $, define */

'use strict';

define(['backbone', 'marionette', 'controller'], function (Backbone, Marionette, Controller) {
	return Backbone.Marionette.AppRouter.extend({
		controller : new Controller(),
		appRoutes: {
			"/" : "mainwindow",
			"user-guide": "userguide",
			'*fragment': 'loadApplet'
		}
	});
});