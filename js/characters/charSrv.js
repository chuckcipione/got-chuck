angular.module('app').service('gotSrv', function($http){
    this.getChar = function(){
        return $http.get('https://anapioficeandfire.com/api/characters/').then(function(response){
            return response.data;
        })
    }
});