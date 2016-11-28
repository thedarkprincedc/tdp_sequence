define(['jquery', "backbone.marionette"],function($, Mn){
    return Mn.View.extend({
		template : _.template("<div id='diagram'>\
								<div class='card-panel hoverable item_all' width='100px'>\
								<h5><%=name%></h5> \
								<div class='dd'></div>\
								</div>\
		 					</div>"),
		onRender: function(){
			this.$el.context.innerHtml = "ghsdnhjdnhjnfh";
			console.log("WEfkwehbfebrfhjr");
		}
	});
});