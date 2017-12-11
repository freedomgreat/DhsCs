/**
 * Created by Administrator on 2016/6/13.
 */
var supermarketMain=angular.module('supermarketMain',['ui.router','loginModule']);
//$rootScope 根常量 
//$state 路由状态
//$stateParams 路由参数
supermarketMain.run(function($rootScope,$state,$stateParams){
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
})
supermarketMain.config(function($stateProvider,$urlRouterProvider) {
   if(!window.sessionStorage["userInfo"]){
      $urlRouterProvider.otherwise('/login');
   }else{
      $urlRouterProvider.otherwise('/buzhidao');   
   }    
   
   $stateProvider
      .state("login",{
          url:"/login",
          templateUrl:"../modules/login.html",
          controller:"loginCtrl"
      })
      .state("about",{
          url:"/about",
          templateUrl:"Page-2.html"
      })
})