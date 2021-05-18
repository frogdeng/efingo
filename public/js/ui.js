$(document).ready(function(){

	  // $(".hamburg").click(function(){
	  //    $('.aside').delay(200).toggleClass("hamburg-open");
	  //    $(this).delay(200).toggleClass("cross");
	  //   });





	  //   $(".product_title").click(function(){
	  //   	if($(this).parent().find(".product_list").hasClass("display_down")){
	  //   		$(this).parent().find(".product_list").slideUp(300).removeClass("display_down")

	  //   	}else{
	  //   		 $(this).parent().find(".product_list").slideDown(300).addClass("display_down")

	  //   	}

	  //   });

	  var bg_array = ["solution_bg_1", "solution_bg_2","solution_bg_3", "solution_bg_4"]


	  $('.des_show_1').click(function(){
	  	$('.solution_wrapper').removeClass(bg_array).addClass("solution_bg_1");
	  	$('.content_1').removeClass("gone").siblings().addClass("gone")

	  })

	  $('.des_show_2').click(function(){
	  	$('.solution_wrapper').removeClass(bg_array).addClass("solution_bg_2")
	  	$('.content_2').removeClass("gone").siblings().addClass("gone")
	  	

	  })
	$('.des_show_3').click(function(){
	  	$('.solution_wrapper').removeClass(bg_array).addClass("solution_bg_3")
	  	$('.content_3').removeClass("gone").siblings().addClass("gone")

	  })
	$('.des_show_4').click(function(){
	  	$('.solution_wrapper').removeClass(bg_array).addClass("solution_bg_4")
	  	$('.content_4').removeClass("gone").siblings().addClass("gone")

	  })
	


});






