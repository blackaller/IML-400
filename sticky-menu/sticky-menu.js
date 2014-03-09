(function(){

	/*======== sticky submenu ========*/
	if(!$(".stick").length)return;
	$(function(){
		var el=$(".stick");
		var top = $(el).offset().top;
		$(window).on("load resize orientationchange",function(){
			top = $(el).offset().top;//this pos may change
		});
		$(window).on("load scroll resize orientationchange", function(){
			var stop=$(window).scrollTop();
			if(stop>top){
				el.addClass("stuck");
			}else{
				el.removeClass("stuck");
			}
		});
	});

})();


//------------- smooth srolling of anchor elements
$("a[href*=#]").click(function(e){
	var hsh=$(this).attr("href");
	var el=$(hsh.substring(hsh.indexOf("#")));//assume anchor is a real obj on page
	if(!el.length)return true;
	e.preventDefault();
	var t=el.offset().top;
	var s=$(".stick");
	if(s.length){//bump below the submenu a bit more
		t-=s.height()+20;
	}
	$("html,body").animate({
		scrollTop:t
	})
	return false;
});