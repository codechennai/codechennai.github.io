function about(){
	window.alert("disp");
	$.get('content/about.txt', function(data) {
		window.alert(data);
		$('.displayContent').html(data);
	}, 'text');
}

function title(){
	window.alert("disp");
	$.get('content/about.txt', function(data) {
		window.alert(data);
		$('.displayContent').html(data);
	}, 'text');
}

function change(file){
	file = "content/"+file+".html";
	$.get(file, function(data) {
		$('.displayContent').html(data);
	}, 'text');
}