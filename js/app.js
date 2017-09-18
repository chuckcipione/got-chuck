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
        .state('character', {
            url: '/characters/:charId',
            templateUrl: '/js/details/detail.html',
            controller: 'detailCtrl',
        })
        .state('map', {
            url: '/map',
            templateUrl: '/js/map/map.html',
            controller: 'mapCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/js/about/about.html',
            controller: 'aboutCtrl',
        });
        
});