define(['jquery', "backbone.marionette"],function($, Mn){
	return Mn.Region.extend({
		el : "#model",
		constructor : function(){
			_.bindAll(this);
			Mn.Region.prototype.constructor.apply(this, arguments);
			this.on("view:show", this.showModal, this);
		},
		getEl : function(selector){
			var el = $(selector);
			$el.on("hidden", this.close);
			return $el;
		},
		showModal : function(view){
			view.on("close", this.hideModal, this);
			this.$el.modal('show');
		},
		hideModal : function(){
			this.$el.modal('hide');
		}
	});
});