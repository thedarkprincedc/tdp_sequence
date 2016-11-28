define(["App", "jquery", "underscore", "backbone", "backbone.radio", "backbone.marionette"], 
function(App, $, _, backbone, radio, Mn){

		/*drawDiagram : function(){
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
			}*/
		
		
	var myApp = new App();
	myApp.start();
});