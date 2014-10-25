'use strict';
/**
 * リゾルバでエラーが発生した場合はこのurlで呼び出されたページには遷移されない
 * urlが呼び出されると
 *  (1) リゾルバの実行
 *  (2) コントローラーの実行
 * を行う
 */
angular.module('previewAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sampleApplication', {
        url: '/sampleApplication',
        templateUrl: 'app/sampleApplication/sampleApplication.html',
        controller: 'SampleapplicationCtrl',
        resolve: {
          message: function(messageService){
            return messageService.someMethod();
          },
          greeting: function(greetingService, $q, $timeout){
            return greetingService.someMethod($q, $timeout);
          }
        }
      });
  });