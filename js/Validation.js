//为避免冲突，将我们的方法用一个匿名方法包裹起来
(function($) {
	$.fn.extend({
		userEvent: function(options){
			//定义BindingEvent的构造函数
			var userEvent = function(ele, opt) {
				this.$element = ele,
				this.defaults = {
					myEventType: '',
				},
				this.options = $.extend({}, this.defaults, opt);
				this.$throttle = false;
				this.$msg = '';	    
				this.$name_invalid = "- 请输入正确的姓名";
				this.$mobile_phone_invalid = "- 请输入联系方式";
			}
			//定义Beautifier的方法
			userEvent.prototype = {
				userEventJudge: function() {
                  if(this.options.myEventType === 'message'){
					 this.userEventmessage();
				  }
				},
				userEventmessage:function(){
				    var messageobj = this.$element;				
					var adduserName = Utils.trim($("input[name='message.name']",messageobj).val());
					var adduserContact = Utils.trim($("input[name='message.contact']",messageobj).val());
					var adduserChoose = $("select[name='message.choose']",messageobj).find("option:selected").text();
					var adduserContent = Utils.trim(messageobj.find("textarea").val());
                    if(adduserName.length>0 && adduserName.length<5){		  
						if(Utils.isMatch(adduserName)){
							this.$msg += this.$name_invalid + '\n';
						}
					}else{
						this.$msg += this.$name_invalid + '\n';
					}
					if(adduserContact.length<=0){		  
						this.$msg += this.$mobile_phone_invalid + '\n';
					}
					if(this.$msg.length > 0){
					  alert(this.$msg);
					  this.$throttle = false;
					}else{
					  this.$throttle = true;
					}
					
				}
			}
		    //创建Beautifier的实体
			var userEvent = new userEvent(this, options);
			//调用其方法
			userEvent.userEventJudge();
			return userEvent.$throttle;
		}	
	});
 //传递jQuery到方法中，这样我们可以使用任何javascript中的变量来代替"$"      
})(jQuery); 

		
