angular.module('app', ['ui.router'])
.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/js/kingslanding/kingslanding.html',
            controller: 'gotCtrl'
        })
        .state('characters', {
            url: '/characters',
            templateUrl: '/js/characters/characters.html',
            controller: 'charCtrl'
        });
});