define(["jquery", "underscore", "backbone", "backbone.radio", "backbone.marionette", 
	"js/views/saveDiagramDialogRegion"], 
	function($, _, backbone, radio, Mn, dialogRegion){

 	const RootView = Mn.View.extend({
		template: _.template('<h1>Marionette says hello!</h1>')
	});
	const CodeView = Mn.View.extend({
		regions : {
			//modalRegion: '#modal'
			modalRegion : dialogRegion
		},
		events : {
			'keyup #editor' : 'onKeyUp',
			'click .update' : 'onClickDownload',
			'click .saveItem' : 'onClickSaveSingleItem'
		},
		seqItem : null,
		onKeyUp : function(){
			console.log("Drawing Diagram_");
			this.drawDiagram();
		},
		onClickDownload : function(){
			console.log("onClickDownload()");
			//this.triggerMethod('announce', 'I graduated!!!');
			//this.showChildView('main-region', DialogV);
			
		},
		onClickSaveSingleItem : function(){
			console.log("njnuhnuhnrhunfhurnfhurnfr");
			//this.showChildView("modalRegion", );
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
				$('#diagram').append("<div class='card-panel hoverable saveItem' width='100px'></div>");
				var diagram = Diagram.parse(this.seqArr[count].desc);
				diagram.drawSVG($('#diagram > div:last')[0], {theme: 'simple'});
				$('#diagram > div:last').prepend("<h5>"+this.seqArr[count].name+"</h5>");
			    ++count;
			}
		},
		template: _.template("<div class='row'><br/> \
	  							<div class='col s3'> \
	  								<div class='card-panel hoverable'> \
	  								<h5>Source:</h5><hr> \
	  									<textarea id='editor' height='600px' class='materialize-textarea'></textarea> \
										<a class='waves-effect waves-light btn save_all'>Save All</a>\
									</div> \
								</div> \
								<div class='col s9'> \
	  								<div id='diagram'></div> \
									<hr> \
									<canvas id='canvas' style='display: none'></canvas> \
								</div> \
							</div>\
							<div id='modal'></div>"),
		onRender: function(){

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