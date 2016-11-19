
var seqArr = [];
var svg;
var currSvg;
function saveAllDiagrams(){
	//seqArr.forEach(function(i){
	var img = [];
	var uploaded = 0;
	for (var i = 0; i < seqArr.length; i++) {
		$("#canvas").html("");
		var svg = $("svg")[i];//document.querySelector('svg'),
		canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d');
		// clear out canvas, if applicable
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// set height/width based on svg, otherwise it cuts off diagram
		canvas.width = svg.width.baseVal.value || 900;
		canvas.height = svg.height.baseVal.value || 600;

		var data = (new XMLSerializer()).serializeToString(svg),
			DOMURL = window.URL || window.webkitURL || window;

		img[i] = new Image(),
		svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'}),
		url = DOMURL.createObjectURL(svgBlob);

		img[i].onload = function () {
			$("#canvas").html("");
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img[this], 0, 0);
			DOMURL.revokeObjectURL(url);

			var imgURI = canvas
				.toDataURL('image/png')
				.replace('image/png', 'image/octet-stream');

			triggerDownload(imgURI, seqArr[uploaded].name + ".png");
			uploaded++;
			if(uploaded => img.length){
				alert("Saved files successfull");
			}
		}.bind(i);
		img[i].src = url;

		//img = null;
	}
		
	//});
}
function drawDiagram() {
	var text = $('.editor').val();
	//.replace(/^"(.*)"$/, '')
	//var regExp = /```sequence[\s]{1,}[A-Za-z0-9\s\-\>\<\:\/\{\}]+```/ig;
	var regExp = /```sequence[\s]{1,}[A-Za-z\-\>\:\s\/\{\}\\\<]+```/ig;
	//var er = regExp.exec(text);
	count = 0;
	last = 0;
	
	var seqItem = "";

	$('#diagram').html('');
	while (seqItem = regExp.exec(text) !== null) {
		seqItem = text.slice(last, regExp.lastIndex);
		seqArr.push({
			name : "Diagram_" + count,
			desc : seqItem.replace(/(```sequence|```)/g,"")
		});
		
		last = regExp.lastIndex;
		$('#diagram').append("<div></div>");
		diagram = Diagram.parse(seqArr[count].desc);
		diagram.drawSVG($('#diagram > div:last')[0], {theme: 'simple'});
		$('#diagram > div:last').prepend("<h3>"+seqArr[count].name+"</h3>");
	    ++count;
	}
	if(seqArr.length>0){
		$('.save').prop( "disabled", false );
	}
	//console.log(seqArr);
	//console.log(regExp);
	// empty out old diagram if exists
	
	
	// draw new one with simple theme (default looks hand-drawn)
	
}

function getDiagramName() {
	var root = $('.diagram-resource').val(),
		suffix = $('.diagram-endpoint').val(),
		name = root + ' - ' + suffix + '.png';

	return name;
};

function triggerDownload (imgURI, filename) {
	filename = (filename)?filename : getDiagramName()
	var evt = new MouseEvent('click', {
		view: window,
		bubbles: false,
		cancelable: true
  	});

	var a = document.createElement('a');
	a.setAttribute('download', filename);
	a.setAttribute('href', imgURI);
	a.setAttribute('target', '_blank');

	a.dispatchEvent(evt);
}

function saveHandler() {
	var svg = document.querySelector('svg'),
		canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d');

	// clear out canvas, if applicable
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// set height/width based on svg, otherwise it cuts off diagram
	canvas.width = svg.width.baseVal.value || 900;
	canvas.height = svg.height.baseVal.value || 600;

	var data = (new XMLSerializer()).serializeToString(svg),
		DOMURL = window.URL || window.webkitURL || window;

	var img = new Image(),
		svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'}),
		url = DOMURL.createObjectURL(svgBlob);

	img.onload = function () {
		ctx.drawImage(img, 0, 0);
		DOMURL.revokeObjectURL(url);

		var imgURI = canvas
			.toDataURL('image/png')
			.replace('image/png', 'image/octet-stream');

		triggerDownload(imgURI);
	};
	img.src = url;
}
$(function() {

	/*var dependencies = {
		"data-main" : "config.js",
		"src" : "vendor/require.js"
	};
	var script = document.createElement("script");
	script.type = "text/javascript";
*/
$('.save').prop( "disabled", true );
	$(document).foundation();
	$('.saveall').click(function() {
			saveAllDiagrams();
	});
  	$('.save').click(function() {
				drawDiagram();
				saveHandler();
	});

	$('.generate').click(function() {
		drawDiagram();
	});
	$( ".editor" ).keyup(function() {
		drawDiagram();
	  //alert( "Handler for .change() called." );
	});
});
		
