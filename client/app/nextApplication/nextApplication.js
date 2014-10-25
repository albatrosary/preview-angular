'use strict';

angular.module('previewAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fuga',{
        template: 'fuga template:{{comments}}<div ui-view></div>',
        controller: function ($scope) {
          console.log('state.controller');
          $scope.comments = 'fugaはfuga';
        }
      })
      .state('nextApplication', {
        parent: 'fuga',
        url: '/nextApplication',
        templateUrl: 'app/nextApplication/nextApplication.html',
        controller: 'NextapplicationCtrl',
        resolve: {
          message: function(){
          	console.log('resolve nextApplication');
            return 'resolve nextApplication';
          }
        },
        onEnter: function(){
          var a;
          a.b.c = 1;
          console.log('onEnter nextApplication');
        },
        onExit: function(){
          console.log('onExit nextApplication');
        }
      });
  });