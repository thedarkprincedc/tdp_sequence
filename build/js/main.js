require(["jquery","portal","underscore","backbone", "marionette", "router"], 
	function($, Portal,_,Backbone, Marionette, Router) {
		var ContactManager = new Marionette.Application();
	
/*	Portal.router = new Router();
	Portal.on('start', function () {
		Backbone.history.start();
		//Backbone.history.initialFragment = Backbone.history.fragment;
	});
Portal.start();
*/	 var RegionContainer = Marionette.LayoutView.extend({
      el: "#app-container",

      regions: {
        header: "#header-region",
        main: "#main-region",
        dialog: "#dialog-region"
      }
    });
	
	//new Router({
		
	//});

	/*
		Portal.baseUrl = "/hiefhibiherihf";
	Portal.router.navigate('#/rejnrojnvoer', {trigger: false});
	*/
//	debugger;
	//var formOj = require("form");
	//formOj.init("body", "Rkmo3mofjm3orjmfoj3mnfjomn3ojrojfn3ojrnfo3rjnfoj3nrofjnr3ojfo");
//	console.log("crcrcrcrc");
});