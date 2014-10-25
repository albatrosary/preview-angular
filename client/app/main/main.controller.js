'use strict';

angular.module('previewAngularApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http, $exceptionHandler) {
    $scope.awesomeThings = [];

    $scope.errormessage = $exceptionHandler;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
      // ページ遷移開始
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
      	console.log('$rootScope $stateChangeStart');
      });
      // ページがないとき
      $rootScope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams){ 
        $console.log('$rootScope stateNotFound');
        event.preventDefault(); 
      });
      // 成功時
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      	console.log('$rootScope $stateChangeSuccess');
      });
      // エラー時
      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams){
        console.log('$rootScope $stateChangeError');
      });
      // viewがロードされる前に発火
      $rootScope.$on('$viewContentLoading', function(event, toState, toParams, fromState, fromParams){
        console.log('$rootScope $viewContentLoading');
      });

  });
