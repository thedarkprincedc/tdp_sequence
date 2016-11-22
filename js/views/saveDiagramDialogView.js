define(['jquery', "backbone.marionette"],function($, Mn){
	return Mn.View.extend({
		events : {
			'click .saveDiagramDialog' : 'onClickSave'
		},
		template: _.template('<div id="modal1" class="modal bottom-sheet">\
							    <div class="modal-content">\
							      <h4>Modal Header</h4>\
							      <p>A bunch of text</p>\
							    </div>\
							    <div class="modal-footer">\
							      <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>\
							    </div>\
							  </div>'),
		onClickSave : function(){
			console.log("saveDiagramDialogView->onClickSave()");

		},
		onRender: function() {
   			console.log("yyyyyyyyyyyyyyyyyyy");
   			var $modalEl = $("#modal");
   			$modalEl.html(view.el);
			$modalEl.modal();
   			 //$('.modal1').modal();
  		}
	});
});