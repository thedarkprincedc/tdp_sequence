define(['jquery', "backbone", "backbone.marionette", "js/views/diagramView"],function($, Bb, Mn, diagramView){
	return Mn.CollectionView.extend({
		childView : diagramView,
		collection : new Bb.Collection([
			{	_id : 01232, 
				name : "kmekdmkekm",
				diagramText: "```sequence\ntest->tttttt:fffff```"
			},
			{	_id : 121, 
				name : "kmekdddddddddddmkekm",
				diagramText: "```sequence\ntest->tttttt:fffff```"
			}
		]),
		initialize: function(options){
    		//this.listenTo(this.collection, "sort", this.renderCollection);
    		
  		}
  	
	});
});
