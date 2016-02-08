$("#menuNav").on("click",function(){
      $("#showMenu").animate({width:'toggle'},350);
    });

$(".review_continue_read").mouseenter(function(){
	 $(this).toggleClass("bgorange");
});

$(".review_continue_read").mouseleave(function(){
	 $(this).toggleClass("bgorange");
});

$(".linkstyle").mouseenter(function(){
	 $(this).toggleClass("viewon");
});

$(".linkstyle").mouseleave(function(){
	 $(this).toggleClass("viewon");
});

$(".share").click(function(){
	$(".sharepopout").slideToggle('500');
});


$(".submitreview").mouseenter(function(){
	$(this).toggleClass("subreview");

});
$(".submitreview").mouseleave(function(){
	$(this).toggleClass("subreview");
});

//
$(".onthisweek").mouseenter(function(){
	$(".feat_thiswk_show").slideToggle('500');
	$('.feat_thiswk_more').css("opacity","0");
});

$(".onthisweek").mouseleave(function(){
	$('.feat_thiswk_show').slideToggle('500');
	$('.feat_thiswk_more').css("opacity","100");
});

$(".recommend").mouseenter(function(){
	$(".feat_recommend_show").slideToggle('500');
	$('.feat_recommend_more').css("opacity","0");
});

$(".recommend").mouseleave(function(){
	$('.feat_recommend_show').slideToggle('500');
	$('.feat_recommend_more').css("opacity","100");

});

$(".free").mouseenter(function(){
	$(".feat_free_show").slideToggle('500');
	$('.feat_free_more').css("opacity","0");
	
});

$(".free").mouseleave(function(){
	$('.feat_free_show').slideToggle('500');
	$('.feat_free_more').css("opacity","100");
});

$(".family").mouseenter(function(){
	$(".feat_family_show").slideToggle('500');
	$('.feat_family_more').css("opacity","0");
	
});

$(".family").mouseleave(function(){
	$('.feat_family_show').slideToggle('500');
	$('.feat_family_more').css("opacity","100");
});


$(document).ready(function(){
	$('#body_content').slideDown('slow');
});