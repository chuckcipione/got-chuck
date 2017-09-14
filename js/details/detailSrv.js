angular.module('app').service('detailSrv', function($http){
    this.getAllChar = function(charId){
        return $http.get("https://www.anapioficeandfire.com/api/characters?page=" + charId).then(function(response){
            return response.data;
        })
    }
})