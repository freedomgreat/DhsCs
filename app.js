/**
 * Created by Administrator on 2017/12/11.
 */
'use strict';
var supermarketMain=angular.module('supermarketMain',['ui.router','loginModule']);

supermarketMain.config(function($stateProvider,$urlRouterProvider) {
   // 判断用户是否登录    
   if(!window.sessionStorage["userInfo"]){
      $urlRouterProvider.otherwise('/login');
   }else{
      $urlRouterProvider.otherwise('/dashboard');   
   }    
})
//$rootScope 根常量 
//$state 路由状态
//$stateParams 路由参数
supermarketMain.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    if(window.sessionStorage["userInfo"]){
		$rootScope.userInfo = JSON.parse(window.sessionStorage["userInfo"]);
	}
    //检查Session，然后重定向页面
	$rootScope.$on('$stateChangeStart', 
    function(event, toState, toParams, fromState, fromParams){
		if(toState && toState.data && toState.data.auth
           && !window.sessionStorage["userInfo"]){
			event.preventDefault();
			window.location.href = "#login";
		}		
		
		if(!toState && !toState.data && !toState.data.auth
           && window.sessionStorage["userInfo"]){
			event.preventDefault();
			window.location.href = "#dashboard";
		}
	});
})
