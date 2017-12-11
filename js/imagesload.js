$(window).load(function(){

	
	var imgArr = [];
	var flash = false;
	/*var loadingText = $("#loadingText");
	var loadBar     = $("#loadBar");
	var flash_mian  = $(".flash_mian");*/
	var initWidth , initHeight;
	var neiWidth , neiHeight;
	//ø’º‰æ‡¿Î ∂•≤øŒª÷√
	//alert(flash_main_liucheng.offset().top);
	//alert(flash_main_zhanshi.position().top);
	
	function init(){
       imgArr.push("images/home1.png");	   
	}
	init();
					
	
	preloadimg(imgArr,function(){
		$("#main img").each(function(index,el){
			if($(el).attr("img-src") != ""){
				var s = $(el).attr("img-src"); 
				$(el).attr("src",s)
			}
		});
	});
	
    function preloadimg (arr,comp){
	var n = 0;
	var loadImg = function(src){
		var img = new Image();
		img.onload = function(){
			n++;
			var v = Math.ceil(n/l*100);
			$("#loadhaha").html(v+" %");
			 
			if(v == 100){
                 imagesInit();
				 flash = true;
			}
			if(n == l){
				comp();
			}
		}
		img.onerror = function(){
		   img.src = "images/loader.gif";
		}
		img.src = src;
	}
	if(typeof(arr) == "string"){
		var l = 1;
		var w = new loadImg(arr);
	}else{
		var l = arr.length;
		
		for(var i=0;i<l;i++){
			var w = new loadImg(arr[i]);
		}
		
	}
   }

   function imagesInit(){
	  var loading = $('.loading');
	  loading.hide();
	  setTimeout(function(){$('.loading_svg_n').SvgPathDraw({current_frame:0,total_frames:1000,path:'path',main_svg:'loading_svg'})},900);
	/*  var height = $(window).height();
	  $('.conter').height(height);
	  $('.conter li').height(height);
      var loading = $('.loading');
	  loading.addClass('opacity');
	  var hh = setTimeout("$('#header').addClass('header')",1000); 
	  var tt = setTimeout("$('.conter').addClass('conter_opacity')",2000);  
	  var tt = setTimeout("$('.top').addClass('topcurrent')",100);*/
   }


})