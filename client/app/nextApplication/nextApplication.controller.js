'use strict';

angular.module('previewAngularApp')
  .controller('NextapplicationCtrl', 
  	function ($scope, message) {
  	  console.log('NextapplicationCtrl');
  	  console.log(message);

      $scope.message = 'Hello';
      
      // ページ遷移開始
      $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      	console.log('NextapplicationCtrl $stateChangeStart');
      });
      // ページがないとき
      $scope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams){ 
        $console.log('NextapplicationCtrl$stateNotFound');
        event.preventDefault(); 
      });
      // 成功時
      $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      	console.log('NextapplicationCtrl$stateChangeSuccess');
      });
      // エラー時
      $scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams){
        console.log('NextapplicationCtrl $stateChangeError');
      });
      // viewがロードされる前に発火
      $scope.$on('$viewContentLoading', function(event, toState, toParams, fromState, fromParams){
        console.log('NextapplicationCtrl $viewContentLoading');
      });

  });
