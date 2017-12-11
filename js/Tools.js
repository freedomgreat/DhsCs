//为避免冲突，将我们的方法用一个匿名方法包裹起来
(function($) {
	$.fn.extend({
	   NewAnimate: function(options){
		  var defaults = {
				object:'.b-banner-c',
				object_two:'.b-banner-div > a',
				object_ative:'cc',
				object_speed:7000,
		  };
		  var options = $.extend(defaults, options);
		  return this.each(function(){ 
               var $o = options;
			   var $throttle = true;
			   var $record = 0;
			   var $index = 0;
			   var $int = '';
			   var $object = $($o.object);
			   var $object_two = $($o.object_two);
			   var $len = $($o.object).length;
			   var $li = $('.b-banner-ul').children('li');

               AnimatePlay(0);
			   function AnimatePlay(num){
				   clearInterval($int);
                   $object.eq(num).addClass($o.object_ative).siblings().removeClass($o.object_ative);
				   $object_two.eq(num).addClass($o.object_ative).siblings().removeClass($o.object_ative);
				   $li.eq(num).addClass('_li').siblings().removeClass('_li');
				   //alert($object.siblings('.banner_ul_m').children('.banner_ul').children('li').length)

				   $record = num;
				   setTimeout(function(){$throttle = true}, 1000);
				   $int = setTimeout(AnimateAuto, $o.object_speed);
			   };
			   $li.click(function(){
			       if($throttle){
					  var index_num = $li.index(this);
					  if($record != index_num){
						  $index= index_num;
						  $throttle = false;
						  AnimatePlay($index);
					  }
				   }
			   });
			   $prev.click(function(){
			       if($throttle){
					  $index--;
					  if($index < 0){
						  $index= $len-1;  
					  }
					  $throttle = false;
					  AnimatePlay($index);
				   }
			   });
			   $next.click(function(){
			       if($throttle){
					  $index++;
					  if($index > $len-1){
						  $index= 0;  
					  }
					  $throttle = false;
					  AnimatePlay($index);
				   }
			   });   
			   function AnimateAuto(){
                   if($throttle){
					$throttle = false;
					$index = $index + 1;	
					if ($index == $len) {
						$index = 0;
					}
					AnimatePlay($index);
				  }
			   };
			  /*$(this).mouseenter(function ()  //移动到上面时停止自动切换
				{
					clearInterval($int);
				});
				$(this).mouseleave(function ()  //移开时继续自动切换
				{
					$int = setTimeout(AnimateAuto, 2000);
				});	*/			   
		  });
		},
		BindingEvent: function(options){
			//定义BindingEvent的构造函数
			var BindingEvent = function(ele, opt) {
				this.$element = ele,
				this.defaults = {
					myEventType: '',
					myEventAclass:'',
					myEventRclass:'',
					myEventDclass:'',
					myEventCliekType:''
				},
				this.options = $.extend({}, this.defaults, opt)
			}
			//定义Beautifier的方法
			BindingEvent.prototype = {
				EventTypeJudge: function() {
                   if(this.options.myEventType === 'click'){
					   this.BinEventClick();
				   }else if(this.options.myEventType === 'hover'){
					   this.BinEventHover();
				   }
				},
				BinEventClick:function(){
					var hoverobj = this.$element;
					var hoverCliekType = this.options.myEventCliekType;
					var hoverAclass = this.options.myEventAclass;
					var hoverRclass = this.options.myEventRclass;
					var hoverDclass = $(this.options.myEventDclass);
					if(hoverCliekType == 'with'){
					  hoverobj.click(function(){
							if(hoverDclass.hasClass(hoverAclass)){
                               hoverDclass.removeClass(hoverAclass)
							}else{
                               hoverDclass.addClass(hoverAclass)
							}
					  });
					}else if(hoverCliekType == 'father'){
					  hoverobj.click(function(){
							var index_num = hoverobj.index(this);
							if(!hoverobj.eq(index_num).hasClass(hoverAclass)){
								if(hoverobj.eq(index_num).hasClass(hoverRclass)){
									hoverobj.eq(index_num).removeClass(hoverRclass);
								}
								hoverobj.eq(index_num).addClass(hoverAclass).siblings().removeClass(hoverAclass);
							}
					  });
					}

				},
				BinEventHover:function(){
					var hoverobj = this.$element;
					var hoverAclass = this.options.myEventAclass;
					var hoverRclass = this.options.myEventRclass;
					var hoverDclass = this.options.myEventDclass;
					hoverobj.hover(function(){
						var index_num = hoverobj.index(this);
						if(!hoverobj.eq(index_num).hasClass(hoverDclass)){
							hoverobj.eq(index_num).addClass(hoverAclass);
						}
					},function(){
						var index_num = hoverobj.index(this);
						hoverobj.eq(index_num).removeClass(hoverRclass);	
					});
				}
			}
		    //创建Beautifier的实体
			var BindingEvent = new BindingEvent(this, options);
			//调用其方法
			return BindingEvent.EventTypeJudge();
		},
		IdImageShow: function(options){
			//定义BindingEvent的构造函数
			var IdImageShow = function(ele, opt) {
				this.$element = ele,
				this.defaults = {
					myMouseenterClass:'',
					myMouseleaveClass:'',
				},
				this.options = $.extend({}, this.defaults, opt)
			}
			//定义Beautifier的方法
			IdImageShow.prototype = {
				ImageShow: function() {
				   this.$element.each(function(index,element){
					   $(element).bind('mouseenter mouseleave',function(e) {
						   //console.log(direction);
						   var eventType = e.type;
						   //alert($(element).children('.case_list_n').children('.case_list_d').children('a').length);
						   if(e.type == 'mouseenter'){
							    $(element).children('.case_list_n').children('.case_list_d').children('a').css({'display':'block'});
							    $(element).children('.case_list_n').children('.case_list_d').children('a').removeClass();
								$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeInDown animated');
						   }else{
							    $(element).children('.case_list_n').children('.case_list_d').children('a').css({'display':'block'});
							    $(element).children('.case_list_n').children('.case_list_d').children('a').removeClass();
								$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeOutUp animated');
						   }
					/*	   var dirName = new Array('上方','右侧','下方','左侧');
						   if(e.type == 'mouseenter'){
							   $(element).html(dirName[direction]+'进入');
						   }else{
							   $(element).html(dirName[direction]+'离开');
						   }*/
					   });
					   //alert($(element).text());
				   });
				},
			}
		    //创建Beautifier的实体
			var IdImageShow = new IdImageShow(this, options);
			//调用其方法
			return IdImageShow.ImageShow();
		},
		IndexImageShow: function(options){
			//定义BindingEvent的构造函数
			var IndexImageShow = function(ele, opt) {
				this.$element = ele,
				this.defaults = {
					myMouseenterClass:'',
					myMouseleaveClass:'',
				},
				this.options = $.extend({}, this.defaults, opt)
			}
			//定义Beautifier的方法
			IndexImageShow.prototype = {
				ImageShow: function() {
				   this.$element.each(function(index,element){
					   $(element).bind('mouseenter mouseleave',function(e) {
						   var w = $(this).width();
						   var h = $(this).height();
						   
						   var x = Math.ceil((e.pageX - this.offsetLeft - (w/2))*(w>h?(h/w):1));
						   var y = Math.ceil((e.pageY - this.offsetTop - (h/2)) * (h>w?(w/h):1));
						   //console.log(this.offsetLeft+'-'+this.offsetTop+'-'+x+'-'+y);
						   var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
						   //console.log(direction);
						   var eventType = e.type;
						   //alert($(element).children('.case_list_n').children('.case_list_d').children('a').length);
						   if(e.type == 'mouseenter'){
							    $(element).children('.case_list_n').children('.case_list_d').children('a').css({'display':'block'});
							    $(element).children('.case_list_n').children('.case_list_d').children('a').removeClass();
							    if(direction == 0){ /*上进*/
									$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeInDown animated');
								}else if(direction == 1){ /*右进*/
									$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeInRight animated');
								}else if(direction == 2){ /*下进*/
									$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeInUp animated');
								}else if(direction == 3){ /*左进*/
									$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeInLeft animated');
								}
						   }else{
							    $(element).children('.case_list_n').children('.case_list_d').children('a').css({'display':'block'});
							    $(element).children('.case_list_n').children('.case_list_d').children('a').removeClass();
							    if(direction == 0){ /*上出*/
									$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeOutUp animated');
								}else if(direction == 1){ /*右出*/
									$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeOutRight animated');
								}else if(direction == 2){ /*下出*/
									$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeOutDown animated');
								}else if(direction == 3){ /*左出*/
									$(element).children('.case_list_n').children('.case_list_d').children('a').addClass('fadeOutLeft animated');
								}
						   }
					/*	   var dirName = new Array('上方','右侧','下方','左侧');
						   if(e.type == 'mouseenter'){
							   $(element).html(dirName[direction]+'进入');
						   }else{
							   $(element).html(dirName[direction]+'离开');
						   }*/
					   });
					   //alert($(element).text());
				   });
				},
			}
		    //创建Beautifier的实体
			var IndexImageShow = new IndexImageShow(this, options);
			//调用其方法
			return IndexImageShow.ImageShow();
		},
		IndexNewsTime: function(options){
			//定义BindingEvent的构造函数
			var IndexNewsTime = function(ele, opt) {
				this.$element = ele,
				this.defaults = {
					newDate:'',
					newTime:'',
				},
				this.options = $.extend({}, this.defaults, opt)
			}
			//定义Beautifier的方法
			IndexNewsTime.prototype = {
				NewsTime: function() {
				   var $newDate = this.options.newDate;
				   var $newTime = this.options.newTime;
				   this.$element.each(function(index,element){
					  var eDate = $(element).children('dt').children($newDate);
					  var eTime = $(element).children($newTime);
					  var cutTemp = eTime.val().split(" "); 
					  var cutDate = cutTemp[0].split("-");
					  for(var i=0; i<cutDate.length;i++){
						  if(i == 0){
							  var temp = cutDate[i].split("20");
							  eDate.append('<span>'+temp[1]+'</span>');
						  }else{
						  eDate.append('<span>'+cutDate[i]+'</span>');
						  }
					  }
				   });
				},
			}
		    //创建Beautifier的实体
			var IndexNewsTime = new IndexNewsTime(this, options);
			//调用其方法
			return IndexNewsTime.NewsTime();
		},
		ValidatedDrag: function(options){
			//定义BindingEvent的构造函数
			var ValidatedDrag = function(ele, opt) {
				this.$element = ele,
				this.defaults = {
					DradWidth:300,
					DragIdc:'#_bg',
					BodyId:'#particles-js',
					ScaleId:'#_scale_text',
					Verify:'#verify'
				},
				this.options = $.extend({}, this.defaults, opt)
			}
			//定义Beautifier的方法
			ValidatedDrag.prototype = {
				Validated: function() {
				   var $DradWidth = this.options.DradWidth;
				   var $DragIdc = this.options.DragIdc;
				   var $BodyId  = this.options.BodyId;
				   var $ScaleId  = this.options.ScaleId;
				   var $VcaleId  = this.options.Verify;
				   
				   var $offset = '';
				   var $switch = false;
				   this.$element.each(function(index,element){
					   $(element).bind('click',function(e) {
						   if(!$switch){
							   $switch = true;
							   $offset = $(element).offset().left;
						   }
					   });
					   $($BodyId).bind("mousemove",function(e){
						    //alert( $(element).offset().left);
						  if($switch){
							//这里可得到鼠标X坐标
							var pointX = e.pageX;
							//这里可以得到鼠标Y坐标
							var pointY = e.pageY;
							//模块的坐标
							//具体坐标
							if(pointX > $offset){
								var leftpos = pointX - $offset;
								if( leftpos >= 258){
									$(element).css({left:258+'px'});
									$($DragIdc).css({width:300+'px'});
									$($ScaleId).css({color:'#fff'});
									$($ScaleId).text('通过验证');
									$($ScaleId).css({cursor:'default'});
									$(element).children('i').eq(0).css({'display':'none'});
									$(element).children('i').eq(1).css({'display':'block'});
									$(element).css({cursor:'default'});
									$($VcaleId).val(1)
									$switch = false;
									$(element).unbind("click");
								}else{
								    $(element).css({left:leftpos+'px'});
								    $($DragIdc).css({width:leftpos+'px'});
								}
							}else{
								$(element).css({left:0+'px'});
								$($DragIdc).css({width:0+'px'});
							}
							
						  }
					   });
				   });
				},
				Mouse : function(e){
					this.$element.each(function(index,element){
						mouse = new MouseEvent(e);
						//alert($(element).offset().left);
						leftpos = mouse.x + $(element).offset().left;
						toppos = mouse.y + $(element).offset().top;
						$(element).css({left:leftpos+'px'})	
					});
				},
				//获取鼠标坐标函数
			    MouseEvent : function(e) {
					this.x = e.pageX
					this.y = e.pageY
				}
			}
		    //创建Beautifier的实体
			var ValidatedDrag = new ValidatedDrag(this, options);
			//调用其方法
			return ValidatedDrag.Validated();
		}
	});
 //传递jQuery到方法中，这样我们可以使用任何javascript中的变量来代替"$"      
})(jQuery); 

		
