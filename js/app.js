define(["jquery", "underscore", "backbone", "backbone.radio", "backbone.marionette",
	"js/views/editorComponent.js",
	"js/views/diagramListComponent.js"], 
function($, _, backbone, radio, Mn,
	editorComponent,
	diagramListComponent){
	const CodeView = Mn.View.extend({
		regions : {
			leftRegion: "#leftRegion",
			rightRegion: "#rightRegion"
		},
		template: _.template("<div class='row'><br/> \
	  							<div class='col s3'> \
	  								<div id='leftRegion'></div>\
								</div> \
								<div class='col s9'> \
	  								<div id='rightRegion'></div>\
									<canvas id='canvas' style='display: none'></canvas> \
								</div> \
							</div>"),
		onRender: function(){
			this.showChildView("leftRegion", new editorComponent());
			this.showChildView("rightRegion", new diagramListComponent());		
		}
	});
	return Mn.Application.extend({
		region: '#main-region',
	  	onStart() {
	    	this.showView(new CodeView());
		}
	});	
});