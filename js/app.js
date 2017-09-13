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
            controller: 'charCtrl',
            // resolve: {
            //     characters: function(charSrv){
            //         return charSrv.getChar().then(function(response){
            //             return response;
            //         })
            //     }
            // }
        })
        .state('map', {
            url: '/map',
            templateUrl: '/js/map/map.html',
            controller: 'mapCtrl'
        });
});