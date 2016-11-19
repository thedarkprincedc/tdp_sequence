require(["jquery"], function($) {
	var formObject = {
		template : null,
		init : function(id, template){
			formObject.template = template;
			formObject.attach(id);
		},
		save : function(){

		},
		generate : function(){

		},
		onKeyUp : function(){
			formObject.generate();
		},
		attach : function(id){
			$(id).html(formObject.template);
		}
	};
	return formObject;
});