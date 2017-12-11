/* $Id : user.js 4865 2007-01-31 14:04:10Z paulgao $ */

/* *
 * 修改会员信息
 */
function userEdit()
{

  var frm = document.forms['formUser'];
  var email = frm.elements['email'] ? Utils.trim(frm.elements['email'].value) : '';
  var userqq = frm.elements['userqq'] ? Utils.trim(frm.elements['userqq'].value) : '';
  var usertel = frm.elements['usertel'] ? Utils.trim(frm.elements['usertel'].value) : '';
  var realname = frm.elements['realname'] ? Utils.trim(frm.elements['realname'].value) : '';
  var msg = '';
  //Utils.isTel()
 
    if ( ! (Utils.isEmail(email)))
    {
      msg += email_error + '\n';
    }
	if(userqq.length >0 && userqq.length<13){
		if(!(Utils.isNumber(userqq))){
			msg += qq_error + '\n';
		}
	}else{
	  msg += qq_error + '\n';
	}
	if(usertel.length>=8 && usertel.length<14){
		if(!(Utils.isTel(usertel))){
			msg += tel_error + '\n';
		}
	}else{
	  msg += tel_error + '\n';
	}
	if(realname.length>0 && realname.length<5){		  
		if(Utils.isMatch(realname)){
			msg += name_invalid + '\n';
		}
	}else{
		msg += name_invalid + '\n';
	}

      if (msg.length > 0)
	  {
		alert(msg);
		return false;
	  }
	  else
	  {
		return true;
	  }

 /* if (passwd_answer.length > 0 && sel_question == 0 || document.getElementById('passwd_quesetion') && passwd_answer.length == 0)
  {
    msg += no_select_question + '\n';
  }

  for (i = 7; i < frm.elements.length - 2; i++)	// 从第七项开始循环检查是否为必填项
  {
	needinput = document.getElementById(frm.elements[i].name + 'i') ? document.getElementById(frm.elements[i].name + 'i') : '';

	if (needinput != '' && frm.elements[i].value.length == 0)
	{
	  msg += '- ' + needinput.innerHTML + msg_blank + '\n';
	}
  }*/


}

/* 会员修改密码 */
function editPassword()
{
  var frm              = document.forms['formPassword'];
  var old_password     = frm.elements['old_password'] ? Utils.trim(frm.elements['old_password'].value) : '';
  var new_password     = frm.elements['new_password'] ? Utils.trim(frm.elements['new_password'].value) : '';
  var confirm_password = frm.elements['confirm_password'] ? Utils.trim(frm.elements['confirm_password'].value) : '';

  var msg = '';
  var reg = null;
  alert(new_password+' '+confirm_password);
  if (old_password.length < 6 || old_password.length > 20)
  {
    msg += old_password_empty + '\n';
  }

  if (old_password.length < 6 || old_password.length > 20)
  {
    msg += new_password_empty + '\n';
  }
  if (new_password != confirm_password)
    {
      msg += both_password_error + '\n';
  }
  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}

/* *
 * 对会员的留言输入作处理
 */
function submitMsg()
{
  var frm         = document.forms['formMsg'];
  var msg_title   = frm.elements['msg_title'].value;
  var msg_content = frm.elements['msg_content'].value;
  var msg = '';

  if (msg_title.length == 0)
  {
    msg += msg_title_empty + '\n';
  }
  if (msg_content.length == 0)
  {
    msg += msg_content_empty + '\n'
  }

  if (msg_title.length > 200)
  {
    msg += msg_title_limit + '\n';
  }

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}

/* *
 * 会员找回密码时，对输入作处理
 */
function submitPwdInfo()
{
  var frm = document.forms['getPassword'];
  var user_name = frm.elements['user_name'].value;
  var email     = frm.elements['email'].value;

  var errorMsg = '';
  if (user_name.length == 0)
  {
    errorMsg += user_name_empty + '\n';
  }

  if (email.length == 0)
  {
    errorMsg += email_address_empty + '\n';
  }
  else
  {
    if ( ! (Utils.isEmail(email)))
    {
      errorMsg += email_address_error + '\n';
    }
  }

  if (errorMsg.length > 0)
  {
    alert(errorMsg);
    return false;
  }

  return true;
}

/* *
 * 会员找回密码时，对输入作处理
 */
function submitPwd()
{
  var frm = document.forms['getPassword2'];
  var password = frm.elements['new_password'].value;
  var confirm_password = frm.elements['confirm_password'].value;

  var errorMsg = '';
  if (password.length == 0)
  {
    errorMsg += new_password_empty + '\n';
  }

  if (confirm_password.length == 0)
  {
    errorMsg += confirm_password_empty + '\n';
  }

  if (confirm_password != password)
  {
    errorMsg += both_password_error + '\n';
  }

  if (errorMsg.length > 0)
  {
    alert(errorMsg);
    return false;
  }
  else
  {
    return true;
  }
}

/* *
 * 处理会员提交的缺货登记
 */
function addBooking()
{
  var frm  = document.forms['formBooking'];
  var goods_id = frm.elements['id'].value;
  var rec_id  = frm.elements['rec_id'].value;
  var number  = frm.elements['number'].value;
  var desc  = frm.elements['desc'].value;
  var linkman  = frm.elements['linkman'].value;
  var email  = frm.elements['email'].value;
  var tel  = frm.elements['tel'].value;
  var msg = "";

  if (number.length == 0)
  {
    msg += booking_amount_empty + '\n';
  }
  else
  {
    var reg = /^[0-9]+/;
    if ( ! reg.test(number))
    {
      msg += booking_amount_error + '\n';
    }
  }

  if (desc.length == 0)
  {
    msg += describe_empty + '\n';
  }

  if (linkman.length == 0)
  {
    msg += contact_username_empty + '\n';
  }

  if (email.length == 0)
  {
    msg += email_empty + '\n';
  }
  else
  {
    if ( ! (Utils.isEmail(email)))
    {
      msg += email_error + '\n';
    }
  }

  if (tel.length == 0)
  {
    msg += contact_phone_empty + '\n';
  }

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }

  return true;
}
/* *
 * ajax提交
 */
function ajax(login_acc,login_pas,login_cod){	
	var defaults = {
		accounts : '1',//帐号	
		password : '2',//密码
		coding   : '3' //编码
	};
	defaults.accounts = login_acc;
	defaults.password = login_pas;
	defaults.coding   = login_cod;

	var options = $.extend(defaults, options);
    //遍历匹配元素的集合
    //在这里编写相应代码进行处理
		var o = options;
		loadingAjax();
		function loadingAjax(){
			$.ajaxSetup({
				type:'POST',
				dataType:'json', 
				url:'/ceshi.php',
				data:decodeURIComponent($.param(o,true)) //$.param()
		    });
			$.ajax({
				beforeSend: function(XMLHttpRequest){
					//$("#loadingstart").show();
					//ShowLoading();
					//alert(XMLHttpRequest); 
				},
				success:function(respone,status,xhr){
					//alert(respone);							
				},
				complete: function(XMLHttpRequest, textStatus){
					//$("#loadingstart").hide();
					//HideLoading();
					//alert(XMLHttpRequest+'-'+textStatus); 
				},
				error: function (XMLHttpRequest,textStatus,errorThrown) { 
				    //alert(textStatus); 
                    //$("#loadingend").show();
                } 
		     });
		}
}
/* *
 * 会员登录
 */
function userLogin()
{
  var frm      = document.forms['formLogin'];
  var username = frm.elements['username'].value;
  var password = frm.elements['password'].value;
  var verify   = frm.elements['verify'].value;
  var coding   = frm.elements['coding'].value;
  
   if(verify == 0){
	  $('#nc_scale_txt').css({'display':'block'}).children('.login-reply').text(scale_no);
	  return false;  
   }
  
   var msg = '';

    if (username.length > 0)
    {
        var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
	    //alert(reg.test(username));
	    if (!reg.test(username))
	    {
		   $('#nc_scale_txt').css({'display':'block'}).children('.login-reply').text(user_invalid);
		   return false; 
	    }
    }else{
	    $('#nc_scale_txt').css({'display':'block'}).children('.login-reply').text(user_invalid);
	    return false; 
    }

    if (password.length < 6 || password.length > 20)
    {
	    $('#nc_scale_txt').css({'display':'block'}).children('.login-reply').text(password_sinvalid);
		return false; 
    }
	if (/ /.test(password) == true)
	{
		$('#nc_scale_txt').css({'display':'block'}).children('.login-reply').text(password_sinvalid);
		return false; 
	}
    // return true;
	return ajax(username,password,coding);
}

function chkstr(str)
{
  for (var i = 0; i < str.length; i++)
  {
    if (str.charCodeAt(i) < 127 && !str.substr(i,1).match(/^\w+$/ig))
    {
      return false;
    }
  }
  return true;
}

function check_password( password )
{
    if ( password.length < 6 )
    {
        document.getElementById('password_notice').innerHTML = password_shorter;
    }
    else
    {
        document.getElementById('password_notice').innerHTML = msg_can_rg;
    }
}

function check_conform_password( conform_password )
{
    password = document.getElementById('password1').value;
    
    if ( conform_password.length < 6 )
    {
        document.getElementById('conform_password_notice').innerHTML = password_shorter;
        return false;
    }
    if ( conform_password != password )
    {
        document.getElementById('conform_password_notice').innerHTML = confirm_password_invalid;
    }
    else
    {
        document.getElementById('conform_password_notice').innerHTML = msg_can_rg;
    }
}

function is_registered( username )
{
    var submit_disabled = false;
	var unlen = username.replace(/[^\x00-\xff]/g, "**").length;

    if ( username == '' )
    {
        document.getElementById('username_notice').innerHTML = msg_un_blank;
        var submit_disabled = true;
    }

    if ( !chkstr( username ) )
    {
        document.getElementById('username_notice').innerHTML = msg_un_format;
        var submit_disabled = true;
    }
    if ( unlen < 3 )
    { 
        document.getElementById('username_notice').innerHTML = username_shorter;
        var submit_disabled = true;
    }
    if ( unlen > 14 )
    {
        document.getElementById('username_notice').innerHTML = msg_un_length;
        var submit_disabled = true;
    }
    if ( submit_disabled )
    {
        document.forms['formUser'].elements['Submit'].disabled = 'disabled';
        return false;
    }
    Ajax.call( 'user.php?act=is_registered', 'username=' + username, registed_callback , 'GET', 'TEXT', true, true );
}



function registed_callback(result)
{
  if ( result == "true" )
  {
    document.getElementById('username_notice').innerHTML = msg_can_rg;
    document.forms['formUser'].elements['Submit'].disabled = '';
  }
  else
  {
    document.getElementById('username_notice').innerHTML = msg_un_registered;
    document.forms['formUser'].elements['Submit'].disabled = 'disabled';
  }
}

function checkEmail(email)
{
  var submit_disabled = false;
  
  if (email == '')
  {
    document.getElementById('email_notice').innerHTML = msg_email_blank;
    submit_disabled = true;
  }
  else if (!Utils.isEmail(email))
  {
    document.getElementById('email_notice').innerHTML = msg_email_format;
    submit_disabled = true;
  }
 
  if( submit_disabled )
  {
    document.forms['formUser'].elements['Submit'].disabled = 'disabled';
    return false;
  }
  Ajax.call( 'user.php?act=check_email', 'email=' + email, check_email_callback , 'GET', 'TEXT', true, true );
}

function check_email_callback(result)
{
  if ( result == 'ok' )
  {
    document.getElementById('email_notice').innerHTML = msg_can_rg;
    document.forms['formUser'].elements['Submit'].disabled = '';
  }
  else
  {
    document.getElementById('email_notice').innerHTML = msg_email_registered;
    document.forms['formUser'].elements['Submit'].disabled = 'disabled';
  }
}


function check_conform_name( conform_name_new )
{
    var conform_name = document.getElementById('extend_field7').value;
	
    conform_name = Utils.trim(conform_name);
	
	conform_name = Utils.isMatch(conform_name);
	if ( conform_name_new.length <= 1 )
    {
		document.getElementById('extend_field7_notice').style.display="inline";
        document.getElementById('extend_field7_notice').innerHTML = msg_zs_name1;
        return false;
    }
	
	if(conform_name){
	   document.getElementById('extend_field7_notice').style.display="inline";
	   document.getElementById('extend_field7_notice').innerHTML = msg_zs_name1;
	    submit_disabled = false;
	}else{
		document.getElementById('extend_field7_notice').style.display="inline";
	    document.getElementById('extend_field7_notice').innerHTML = msg_can_rg;
		submit_disabled = true;
	}

}

function check_conform_num( conform_name_new )
{
    var conform_name = document.getElementById('extend_field8').value;
	
    conform_name = Utils.trim(conform_name);
	
	conform_name = Utils.isNumber(conform_name);

	if ( conform_name_new.length < 18 )
    {
		document.getElementById('extend_field8_notice').style.display="inline";
        document.getElementById('extend_field8_notice').innerHTML = msg_zs_num2;
        return false;
    }
    if ( conform_name)
    {
        document.getElementById('extend_field8_notice').style.display="inline";
	    document.getElementById('extend_field8_notice').innerHTML = msg_can_rg;submit_disabled = true;
    }
    else
    {
       document.getElementById('extend_field8_notice').style.display="inline";
	   document.getElementById('extend_field8_notice').innerHTML = msg_zs_name1;submit_disabled = false;
    }

}
/* *
 * 处理购物车提交
 */
function shoppingcart()
{
    var frm  = document.forms['myform'];
	var address_name  = Utils.trim(frm.elements['address.name'].value);
    var address_mobile  = Utils.trim(frm.elements['address.mobile'].value);
    var address_where = Utils.trim(frm.elements['address.where'].value);
	var addressLabelId1 = document.getElementById('addressLabelId1').innerHTML;
	var cat_name = Utils.trim(frm.elements['cat_name']);
	var cat_mobile = Utils.trim(frm.elements['cat_mobile']);
	var cat_where = Utils.trim(frm.elements['cat_where']);
	var str = "请选择所在地区";
	var msg = "";
	if(address_name.length>0 && address_name.length<5){		  
		if(Utils.isMatch(address_name)){
			msg += name_invalid + '\n';
		}
	}else{
		msg += name_invalid + '\n';
	}
	if(address_mobile.length>0&&address_mobile.length==11){		  
		var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
		if (!reg.test(address_mobile))
	   {
		 	msg += mobile_phone_invalid + '\n';
	    }
	}else{
		msg += mobile_phone_invalid + '\n';
	}
	if(addressLabelId1 == "请选择所在地区"){
		msg += addressLabelId_invalid + '\n';
	}
    if (msg.length > 0){
	  alert(msg);
	  return false;
	}else{
	  cat_name.value = address_name;
	  cat_mobile.value = address_mobile;
	  cat_where.value = addressLabelId1+' '+address_where;
      return true;
	}
	
}
/* *
 * 处理注册用户
 */
function register()
{
  var frm  = document.forms['formUser'];
  var username  = Utils.trim(frm.elements['username'].value);
  var password  = Utils.trim(frm.elements['password'].value);
  var confirm_password = Utils.trim(frm.elements['confirm_password'].value);
  var msg = "";

  if (username.length>0)
  {
	  
     var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
	 //alert(reg.test(username));
	 if (!reg.test(username))
	 {
		msg += mobile_phone_invalid + '\n';
	  }
   }
   if (password.length < 6 || password.length > 20)
   {
		msg += password_shorter + '\n';
    }
	if (/ /.test(password) == true)
	{
		msg += passwd_balnk + '\n';
	}
	if (confirm_password != password )
	{
		msg += confirm_password_invalid + '\n';
	}

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}
function userfk()
{
  var frm  = document.forms['formUser'];
  var username  = Utils.trim(frm.elements['username'].value);
  var msg = "";

  if (username.length>0)
  {
	  
     var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
	 if (!reg.test(username))
	 {
		msg += mobile_phone_invalid + '\n';
	  }
   }
   
  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}
/* *
 * 搜索地址跳转
 */
function searchForm(){
	var dd=$('#souzi').val();
	var cc=$('#sid').val();
	window.location.href="/?search-"+dd+"-"+cc+"/";
	return false;
}
/* *
 * 用户中心订单保存地址信息
 */
function saveOrderAddress(id)
{
  var frm           = document.forms['formAddress'];
  var consignee     = frm.elements['consignee'].value;
  var email         = frm.elements['email'].value;
  var address       = frm.elements['address'].value;
  var zipcode       = frm.elements['zipcode'].value;
  var tel           = frm.elements['tel'].value;
  var mobile        = frm.elements['mobile'].value;
  var sign_building = frm.elements['sign_building'].value;
  var best_time     = frm.elements['best_time'].value;

  if (id == 0)
  {
    alert(current_ss_not_unshipped);
    return false;
  }
  var msg = '';
  if (address.length == 0)
  {
    msg += address_name_not_null + "\n";
  }
  if (consignee.length == 0)
  {
    msg += consignee_not_null + "\n";
  }

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}

/* *
 * 会员余额申请
 */
function submitSurplus()
{
  var frm            = document.forms['formSurplus'];
  var surplus_type   = frm.elements['surplus_type'].value;
  var surplus_amount = frm.elements['amount'].value;
  var process_notic  = frm.elements['user_note'].value;
  var payment_id     = 0;
  var msg = '';

  if (surplus_amount.length == 0 )
  {
    msg += surplus_amount_empty + "\n";
  }
  else
  {
    var reg = /^[\.0-9]+/;
    if ( ! reg.test(surplus_amount))
    {
      msg += surplus_amount_error + '\n';
    }
  }

  if (process_notic.length == 0)
  {
    msg += process_desc + "\n";
  }

  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }

  if (surplus_type == 0)
  {
    for (i = 0; i < frm.elements.length ; i ++)
    {
      if (frm.elements[i].name=="payment_id" && frm.elements[i].checked)
      {
        payment_id = frm.elements[i].value;
        break;
      }
    }

    if (payment_id == 0)
    {
      alert(payment_empty);
      return false;
    }
  }

  return true;
}

/* *
 *  处理用户添加一个红包
 */
function addBonus()
{
  var frm      = document.forms['addBouns'];
  var bonus_sn = frm.elements['bonus_sn'].value;

  if (bonus_sn.length == 0)
  {
    alert(bonus_sn_empty);
    return false;
  }
  else
  {
    var reg = /^[0-9]{10}$/;
    if ( ! reg.test(bonus_sn))
    {
      alert(bonus_sn_error);
      return false;
    }
  }

  return true;
}

/* *
 *  合并订单检查
 */
function mergeOrder()
{
  if (!confirm(confirm_merge))
  {
    return false;
  }

  var frm        = document.forms['formOrder'];
  var from_order = frm.elements['from_order'].value;
  var to_order   = frm.elements['to_order'].value;
  var msg = '';

  if (from_order == 0)
  {
    msg += from_order_empty + '\n';
  }
  if (to_order == 0)
  {
    msg += to_order_empty + '\n';
  }
  else if (to_order == from_order)
  {
    msg += order_same + '\n';
  }
  if (msg.length > 0)
  {
    alert(msg);
    return false;
  }
  else
  {
    return true;
  }
}

/* *
 * 订单中的商品返回购物车
 * @param       int     orderId     订单号
 */
function returnToCart(orderId)
{
  Ajax.call('user.php?act=return_to_cart', 'order_id=' + orderId, returnToCartResponse, 'POST', 'JSON');
}

function returnToCartResponse(result)
{
  alert(result.message);
}

/* *
 * 检测密码强度
 * @param       string     pwd     密码
 */
function checkIntensity(pwd)
{
  var Mcolor = "#FFF",Lcolor = "#FFF",Hcolor = "#FFF";
  var m=0;

  var Modes = 0;
  for (i=0; i<pwd.length; i++)
  {
    var charType = 0;
    var t = pwd.charCodeAt(i);
    if (t>=48 && t <=57)
    {
      charType = 1;
    }
    else if (t>=58 && t <=90)
    {
      charType = 2;
    }
    else if (t>=91 && t <=122)
      charType = 4;
    else
      charType = 4;
    Modes |= charType;

  }

  for (i=0;i<20;i++)
  {
    if (Modes & 1) m++;
      Modes>>>=1;
  }

  if (pwd.length<=6)
  {
    m = 1;
  }

  switch(m)
  {
    case 1 :
      Lcolor = "2px solid red";
      Mcolor = Hcolor = "2px solid #DADADA";
    break;
    case 2 :
      Mcolor = "2px solid #f90";
      Lcolor = Hcolor = "2px solid #DADADA";
    break;
    case 3 :
      Hcolor = "2px solid #3c0";
      Lcolor = Mcolor = "2px solid #DADADA";
    break;
    case 4 :
      Hcolor = "2px solid #3c0";
      Lcolor = Mcolor = "2px solid #DADADA";
    break;
    default :
      Hcolor = Mcolor = Lcolor = "";
    break;
  }
  if (document.getElementById("pwd_lower"))
  {
    document.getElementById("pwd_lower").style.borderBottom  = Lcolor;
    document.getElementById("pwd_middle").style.borderBottom = Mcolor;
    document.getElementById("pwd_high").style.borderBottom   = Hcolor;
  }


}

function changeType(obj)
{
  if (obj.getAttribute("min") && document.getElementById("ECS_AMOUNT"))
  {
    document.getElementById("ECS_AMOUNT").disabled = false;
    document.getElementById("ECS_AMOUNT").value = obj.getAttribute("min");
    if (document.getElementById("ECS_NOTICE") && obj.getAttribute("to") && obj.getAttribute('fee'))
    {
      var fee = parseInt(obj.getAttribute("fee"));
      var to = parseInt(obj.getAttribute("to"));
      if (fee < 0)
      {
        to = to + fee * 2;
      }
      document.getElementById("ECS_NOTICE").innerHTML = notice_result + to;
    }
  }
}

function calResult()
{
  var amount = document.getElementById("ECS_AMOUNT").value;
  var notice = document.getElementById("ECS_NOTICE");

  reg = /^\d+$/;
  if (!reg.test(amount))
  {
    notice.innerHTML = notice_not_int;
    return;
  }
  amount = parseInt(amount);
  var frm = document.forms['transform'];
  for(i=0; i < frm.elements['type'].length; i++)
  {
    if (frm.elements['type'][i].checked)
    {
      var min = parseInt(frm.elements['type'][i].getAttribute("min"));
      var to = parseInt(frm.elements['type'][i].getAttribute("to"));
      var fee = parseInt(frm.elements['type'][i].getAttribute("fee"));
      var result = 0;
      if (amount < min)
      {
        notice.innerHTML = notice_overflow + min;
        return;
      }

      if (fee > 0)
      {
        result = (amount - fee) * to / (min -fee);
      }
      else
      {
        //result = (amount + fee* min /(to+fee)) * (to + fee) / min ;
        result = amount * (to + fee) / min + fee;
      }

      notice.innerHTML = notice_result + parseInt(result + 0.5);
    }
  }
}


function uesr_name_new(username){
	document.getElementById('username_notice').style.display="inline";
	document.getElementById('username_notice').innerHTML = msg_name_new;
}

function uesr_prs_new(username){
	document.getElementById('password_notice').style.display="inline";
	document.getElementById('password_notice').innerHTML = msg_prs_new;
}
function uesr_prs_new1(username){
	document.getElementById('conform_password_notice').style.display="inline";
	document.getElementById('conform_password_notice').innerHTML = msg_prs_ren;
}
function uesr_zhenshi_new(username){
	document.getElementById('extend_field7_notice').style.display="inline";
	document.getElementById('extend_field7_notice').innerHTML = msg_zs_name;
}
function uesr_num_new(username){
	document.getElementById('extend_field8_notice').style.display="inline";
	document.getElementById('extend_field8_notice').innerHTML = msg_zs_num;
}

/* ajax */
function myAjax(){
}