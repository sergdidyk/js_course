$(function(){

	var path = window.location.pathname;
	var links = document.getElementsByTagName("a");
	for(var i = 0; i < links.lenght; i++){
		links.removeClass("active");
	};

	if(path == "/"){
		$(links[0]).addClass("active");
	}else if (path == "/about") {
		$(links[1]).addClass("active");
	}else if(path == "/contact"){
		$(links[2]).addClass("active");
	};

});