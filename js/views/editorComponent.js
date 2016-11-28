define(['jquery', "backbone.marionette"],function($, Mn){
	return Mn.View.extend({
			template: _.template("<div class='card-panel hoverable'> \
						<h5>Source:</h5><hr> \
							<textarea id='editor' height='600px' class='materialize-textarea'></textarea> \
						<a class='waves-effect waves-light btn import_all'>Import</a>&nbsp\
						<a class='waves-effect waves-light btn clear_all'>Clear</a>&nbsp\
						<a class='waves-effect waves-light btn save_all'>Save</a>\
					</div>")
	});
});
