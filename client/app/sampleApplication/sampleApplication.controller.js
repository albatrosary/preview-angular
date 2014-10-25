'use strict';

angular.module('previewAngularApp')
  .controller('SampleapplicationCtrl', ['$scope','$state','$rootScope','sampleApplicationFactory', 'message', 'greeting', 
  	function ($scope, $state,$rootScope,sampleApplicationFactory, message, greeting) {
  	  console.log('SampleapplicationCtrl Starting');
  	  console.log($state.current.data.customData1)
      console.log(message);
      console.log(sampleApplicationFactory.someMethod());
      console.log(greeting);

            // ページ遷移開始
      $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      	console.log('SampleapplicationCtrl $stateChangeStart');
      });
      // ページがないとき
      $scope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams){ 
        $console.log('SampleapplicationCtrl　$stateNotFound');
        event.preventDefault(); 
      });
      // 成功時
      $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      	console.log('SampleapplicationCtrl　$stateChangeSuccess');
      });
      // エラー時
      $scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams){
        console.log('SampleapplicationCtrl $stateChangeError');
      });
      // viewがロードされる前に発火
      $scope.$on('$viewContentLoading', function(event, toState, toParams, fromState, fromParams){
        console.log('SampleapplicationCtrl $viewContentLoading');
      });

    }]);
