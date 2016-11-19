/*jslint node: true, nomen: true, unparam: true */
/*global jquery, _, $, define */

'use strict';

define(['backbone', 'marionette'], function (Backbone, Marionette) {
	var Portal = new Backbone.Marionette.Application();
	Portal.on('initialize:before', function () {
		return undefined;
	});

	Portal.on('initialize:after', function () {
		return undefined;
	});
	Portal.on('start', function () {

	});
	return Portal;
});