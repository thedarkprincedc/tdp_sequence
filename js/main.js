define(function (require) {
	var $ = require('jquery'),
		_ = require('underscore'),
		backbone = require('backbone'),
		radio = require('backbone.radio'),
		Mn = require('backbone.marionette');
		//require('raphael');
		

	//
	//$(document).foundation();
 	const RootView = Mn.View.extend({
		template: _.template('<h1>Marionette says hello!</h1>')
	});
	const CodeView = Mn.View.extend({
		region : {

		},
		events : {
			'keyup #editor' : 'onKeyUp',
			'click #download' : 'onClickDownload'
		},
		seqItem : null,
		onKeyUp : function(){
			console.log("Drawing Diagram_");
			this.drawDiagram();
		},
		onClickDownload : function(){

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
				$('#diagram').append("<div></div>");
				var diagram = Diagram.parse(this.seqArr[count].desc);
				diagram.drawSVG($('#diagram > div:last')[0], {theme: 'simple'});
				$('#diagram > div:last').prepend("<h3>"+this.seqArr[count].name+"</h3>");
			    ++count;
			}
		},
		template: _.template("<div class='expanded row'><br/> \
	  							<div class='large-6 columns'> \
	  								<h3>Source:</h3> \
	  									<textarea id='editor' rows='15'></textarea> \
										<button class='button'>Update</button> \
								</div> \
								<div class='large-6 columns'> \
	  								<div id='diagram'></div> \
									<hr> \
									<canvas id='canvas' style='display: none'></canvas> \
								</div> \
							</div>"),
		onRender: function(){
			console.log("Egergtrgrtgrtgrtg");
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