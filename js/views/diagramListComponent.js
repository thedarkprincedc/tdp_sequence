define(['jquery', "backbone", "backbone.marionette", "js/views/diagramView",
	"diagramCollection"],function($, Bb, Mn, diagramView, diagramCollection){
	return Mn.CollectionView.extend({
		childView : diagramView,
		collection : diagramCollection,
		initialize: function(options){
    		//this.listenTo(this.collection, "sort", this.renderCollection);
    		/*this.listenTo("editor:update", function(){
    			console.log("fffffffff");
    		});*/
  		}
  	
	});
});
