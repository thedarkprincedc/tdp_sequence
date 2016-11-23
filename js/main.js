define(["jquery", "underscore", "backbone", "backbone.radio", "backbone.marionette", 
	"js/views/saveDiagramDialogRegion", "js/views/saveDiagramDialogView"], 
	function($, _, backbone, radio, Mn, dialogRegion, dialogView){

 	const RootView = Mn.View.extend({
		template: _.template('<h1>Marionette says hello!</h1>')
	});
	const EditorView = Mn.View.extend({
		template: _.template("<div class='card-panel hoverable'> \
								<h5>Source:</h5><hr> \
									<textarea id='editor' height='600px' class='materialize-textarea'></textarea> \
								<a class='waves-effect waves-light btn import_all'>Import</a>&nbsp\
								<a class='waves-effect waves-light btn clear_all'>Clear</a>&nbsp\
								<a class='waves-effect waves-light btn save_all'>Save</a>\
							</div>")
	});
	const SequenceListView = Mn.View.extend({
		template : _.template("<div id='diagram'></div>")
	});
var modal = new dialogRegion({el:'#modal'});
var view = new dialogView();
	const CodeView = Mn.View.extend({
		regions : {
			leftRegion: "#leftRegion",
			rightRegion: "#rightRegion",
			modal : "#modal"
		},
		events : {
			'keyup #editor' : 'onKeyUp',
			'click .import_all' : 'onClickImport',
			'click .clear_all' : 'onClickClear',
			'click .save_all' : 'onClickSave',
			'click .item_all' : 'onClickAll'
		},
		seqItem : null,
		onKeyUp : function(){
			console.log("Drawing Diagram_");
			this.drawDiagram();
		},
		onClickImport : function(){

		},
		onClickClear : function(){

		},
		onClickSave : function(){
			modal.show(view);
		},
		onClickItem : function(){

		},
		drawDiagram : function(){
			var text = $('#editor').val();
			var regExp = /```sequence[\s]{1,}[A-Za-z\-\>\:\s\/\{\}\\\<]+```/ig;
			count = 0;
			last = 0;
			var seqItem = text;
			$('#diagram').html('');
			this.seqArr = [];
			
			while (seqItem = regExp.exec(text) !== null) {
				seqItem = text.slice(last, regExp.lastIndex);
				this.seqArr.push({
					name : "Diagram_" + count,
					desc : seqItem.replace(/(```sequence|```)/g,"")
				});
				last = regExp.lastIndex;
				$('#diagram').append("<div class='card-panel hoverable item_all' width='100px'></div>");
				var diagram = Diagram.parse(this.seqArr[count].desc);
				diagram.drawSVG($('#diagram > div:last')[0], {theme: 'simple'});
				$('#diagram > div:last').prepend("<h5>"+this.seqArr[count].name+"</h5>");
			    ++count;
			}
		},
		template: _.template("<div class='row'><br/> \
	  							<div class='col s3'> \
	  								<div id='leftRegion'></div>\
								</div> \
								<div class='col s9'> \
	  								<div id='rightRegion'></div>\
									<canvas id='canvas' style='display: none'></canvas> \
								</div> \
							</div>\
							<div id='modal'></div>"),
		onRender: function(){

			this.showChildView("leftRegion", new EditorView());
			this.showChildView("rightRegion", new SequenceListView());
			
			
			this.showChildView("modal", view);
			

		}
	});
	const App = Mn.Application.extend({
	  region: '#main-region',
	  onStart() {
	    this.showView(new CodeView());
	  }
	});
	const myApp = new App();
	myApp.start();
});