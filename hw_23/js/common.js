$(function(){
	let preview_front = $(".side_front");
	let preview_back = $(".side_back");
	let main_view = $(".main_view_container");
	
	function changeSide(img){
		$(img).on("click", function() {
			let src = $(this).children().children().attr("src");
			$(main_view).children().attr("src", src);	
		});
	}
	changeSide(preview_back);
	changeSide(preview_front);
});