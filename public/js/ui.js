$(document).ready(function(){

	$(".hamburg").click(function(){
			$('.aside').delay(200).toggleClass("hamburg-open");
			$(this).delay(200).toggleClass("cross");
		});

	$(".product_title").click(function(){
			if($(this).parent().find(".product_list").hasClass("display_down")){
				$(this).parent().find(".product_list").slideUp(300).removeClass("display_down")
		}else{
				$(this).parent().find(".product_list").slideDown(300).addClass("display_down")
		}
	});

		

      // if(sc_1 > inside_slider_h){
      //   $(".inside_menu").addClass('index_menu_bg')
      // }
      // else{
      //   $(".inside_menu").removeClass('index_menu_bg')
      // }

});

	








