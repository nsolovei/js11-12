(function ($) {

$.fn.carousel = function () {
    $('.carousel__box').append('<button class="carousel__button_left">&#8592;</button><button class="carousel__button_right">&#8594;</button>');
  	  	
    var $btnLeft = $('.carousel__button_left');
    var $btnRight = $('.carousel__button_right');
    var $imgList = $('.carousel__items_list');
  	var imgWidth = parseInt($('img').css('width'));
  	var left = 0;
  	var imgCount = $imgList.find('.carousel__item').length;
  	var minPix = -((imgCount-1)*imgWidth);
  	var maxPix = 0;

  	function slideLeft (){
  		if(left!=maxPix){
  			left+=imgWidth;
  			$btnLeft.off();
  			$imgList.animate({marginLeft: left + 'px'}, 300 ,function(){
  				$btnLeft.on('click', slideLeft);
  			});
  		}
  	}

  	function slideRight (){
  		if(left!=minPix){
  			left-=imgWidth;
  			$btnRight.off();
  			$imgList.animate({marginLeft: left + 'px'}, 300 , function(){
  				$btnRight.on('click', slideRight);
  			});
  		}
  	}

  	$btnLeft.on('click', slideLeft);
  	$btnRight.on('click', slideRight);

  }

})(jQuery);
