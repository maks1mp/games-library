var tictactoe = angular.module('tictactoe', ['ui.router', 'btford.socket-io']);

tictactoe.$injector = ['$stateProvider', '$urlRouterProvider', '$qProvider'];

tictactoe.config(function ($stateProvider, $urlRouterProvider, $qProvider) {
  
  
  $qProvider.errorOnUnhandledRejections(false);
  
  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('/login', {
      url: '/login',
      templateUrl: '/app/login/tpl.html',
      controller: 'loginCtrl as ctrl',
    })
    .state('/meeting', {
      url: '/meeting',
      templateUrl: '/app/meeting/tpl.html',
      controller: 'meetingCtrl as ctrl',
      params: {
          name: null,
          id: null,
      }
    })
});