$(function(){
	let preview_front = $(".side_front");
	let preview_back = $(".side_back");
	let main_view = $(".main_view_container");

	//colors URLs
	let white_front = "https://cdn.shopify.com/s/files/1/1800/4357/products/s-l1600_c6675ac3-b52d-4c6d-a3dd-b8eeb7e2eff5_medium.jpg?v=1490757428";
	let white_back = "https://cdn.shopify.com/s/files/1/1800/4357/products/s-l1600_ba054c81-11ce-4c8c-ba21-7b4a7f56bfc2_medium.jpg?v=1490757428";
	let black_front = "https://cdn.shopify.com/s/files/1/1800/4357/products/s-l1600_2b71967e-a540-48c6-9240-33d2c5e65b0d_medium.jpg?v=1490757428";
	let black_back = "https://cdn.shopify.com/s/files/1/1800/4357/products/s-l1600_7c8666c4-b1dd-4559-9be7-93f9d2adc92e_medium.jpg?v=1490757428";

	//change side
	function changeSide(img){
		$(img).on("click", function() {
			let src = $(this).children().children().attr("src");
			$(main_view).children().attr("src", src);	
		});
	}
	changeSide(preview_back);
	changeSide(preview_front);

	//change color
	$(".color").click(function(){
		let bcg = $(this).css("background-color");
		if(bcg === "rgb(0, 0, 0)"){
			$(preview_front).children().children().attr("src", black_front);
			$(preview_back).children().children().attr("src", black_back);
			$(main_view).children().attr("src", black_front);
		}else{
			$(preview_front).children().children().attr("src", white_front);
			$(preview_back).children().children().attr("src", white_back);
			$(main_view).children().attr("src", white_front);
		}
	});
	
	//change size
	$(".size").click(function(){
		$("#user_size").text($(this).text());
	});

});