/* $Id : controllers.js 4865 201712-111 10:00:00Z freedomgreat $ */
/*
  * 这是本网站的控制器所在
*/
'use strict';
angular.module('loginModule', []);
//var loginModule = angular.module('loginModule',[]);

//路由定义
supermarketMain.config(function($stateProvider) {
  //登录
  $stateProvider.state('login', {
	url: "/login",
    templateUrl: 'modules/users/login.html',
	controller: 'loginController'
  });
  /* 注册
  $stateProvider.state('signup', {
	url: "/signup",
    templateUrl: 'modules/users/signup.html',
	controller: 'signupController'
  });*/
  //登出
  $stateProvider.state('logout', {
	url: "/logout",
	template: "<h3>Logging out...</h3>",
    controller: 'logoutController'
  });
});

//Factories
supermarketMain.factory('userServices', ['$http', function($http) {

    var factoryDefinitions = {
      login: function(loginReq) {
        console.log(loginReq); 
        return $http.get('modules/users/mock/login.json', loginReq)
        .success(function(data) { console.log(data); return data; });
      },
	  signup: function(signupReq) {
        return $http.get('modules/common/mock/success.json', signupReq)
        .success(function(data) { return data; });
      }
	}
    return factoryDefinitions;
  }
]);

//Controllers
supermarketMain.controller('loginController', 
                ['$scope', 
                 'userServices',
                 '$location', 
                 '$rootScope', 
function($scope, userServices, $location, $rootScope) {

	$scope.login = {"email":"jiangrongbo@gmail.com",
                    "password": "mypassword"};
  
	$scope.doLogin = function() {
		if ($scope.loginForm.$valid) {	
			userServices.login($scope.login).then(function(result){
				$scope.data = result;
                console.log(result.error);
				if (!result.error) {
				  window.sessionStorage["userInfo"] = JSON.stringify(result.data);
				  $rootScope.userInfo = JSON.parse(window.sessionStorage["userInfo"]);
  				  $location.path("/dashboard");
				}
			});	
		}
	};
}]);

