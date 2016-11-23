define(['jquery', "backbone.marionette"],function($, Mn){
	return Mn.Region.extend({
	    constructor: function() {
	        Mn.Region.prototype.constructor.apply(this, arguments);
	        //this._ensureEl();
	        this.$el.on('hidden', {region:this}, function(event) {
	            event.data.region.close();
	        });
	    },
	    onShow: function() {
	        //this.$el.modal('show');
	         $('#modal1').modal('open');
	    },
	    onClose: function() {
	        this.$el.modal('hide');
	    }
	});
});