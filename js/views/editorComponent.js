define(['jquery', "backbone", "backbone.marionette", "diagramCollection"],function($, Bb, Mn,diagramCollection){
	return Mn.View.extend({
		events : {
			'keyup #editor' : 'onKeyUp'
		},
		radioEvents : {
			'user:test' : 'onUpdateTest'
		},
		onUpdateTest : function(message){
			console.log("djdndjnjdddnd");
		},
		initialize : function(){
			
			/*this.vent.bindTo("foo", function(){
  				alert("bar");
			});*/
		},	
		onKeyUp : function(){
			var regExp = /```sequence[\s]{1,}[A-Za-z\-\>\:\s\/\{\}\\\<]+```/ig;
			var text = $('#editor').val();
			var seqItem , last, seqArr = [];
diagramCollection.reset();
			while (seqItem = regExp.exec(text) !== null) {
				seqItem = text.slice(last, regExp.lastIndex);
				//seqArr.push({name: "fff", dr : seqItem});
				diagramCollection.add({name : "jednjneijnijende", dr : seqItem});
				last = regExp.lastIndex;
			};
			console.log(seqArr);
		},
		template: _.template("<div class='card-panel hoverable'> \
					<h5>Source:</h5><hr> \
						<textarea id='editor' height='600px' class='materialize-textarea'></textarea> \
					<a class='waves-effect waves-light btn import_all'>Import</a>&nbsp\
					<a class='waves-effect waves-light btn clear_all'>Clear</a>&nbsp\
					<a class='waves-effect waves-light btn save_all'>Save</a>\
				</div>")
	});
});
