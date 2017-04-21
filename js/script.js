
function change(file){
	file = "content/"+file+".html";
	$.get(file, function(data) {
		$('.displayContent').html(data);
	}, 'text');
}