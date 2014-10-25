'use strict';
/**
 * リゾルバでエラーが発生した場合はこのurlで呼び出されたページには遷移されない
 * urlが呼び出されると
 *  (1) リゾルバで定義したファクトリーの実行 → ここでエラーがあると画面遷移しない
 *  (2) onEnterの実行  
 *  (3) parentで定義したstateの処理実行
 *  (4) インジェクションしたファクトリーの実行
 *  (5) コントローラーの実行
 *  (6) 画面上の処理
 *  (7) 次の画面のリゾルバ開始
 *  (8) onExitの実行 <- 画面を抜けるときに実行
 *      ただし、リゾルバでエラーがあってもonExitは事項される
 *  (9) 次の画面のonEnterの実行
 * を行う。
 * カスタムdataを定義するとコントローラーで呼び出しが行える
 *  stateの内容は
 *  var sampleApplication = {hoge}
 *  といった形で外だしにできる
 */
angular.module('previewAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hoge',{
        template: 'hoge template:{{comments}}<div ui-view></div>',
        controller: function ($scope) {
          console.log('state.controller');
          $scope.comments = 'fuga';
        }
      })
      .state('sampleApplication', {
        parent: 'hoge',
        url: '/sampleApplication',
        templateUrl: 'app/sampleApplication/sampleApplication.html',
        controller: 'SampleapplicationCtrl',
        resolve: {
          message: function(messageService){
            return messageService.someMethod();
          },
          greeting: function(greetingService, $q, $timeout){
            return greetingService.someMethod($q, $timeout);
          },
          preprocessing: function(){
            console.log('resolve.preprocessing')
            return 'preprocessing';
          }
        },
        data: {
          customData1: 'data.customData1',
          customData2: "red"
        },
        onEnter: function(preprocessing){
          // 処理はファクトリを定義してリゾルバへ定義、良い出すことで処理が実行される
          console.log('onEnter sampleApplication');
        },
        onExit: function(){
          // controller？templateUrl?を離れるときに実行される
          console.log('onExit sampleApplication');
        }
      });
  });