angular.module('app').service('charSrv', function($http, $q){
        
        this.getAllChar = function(){
            return $http.get("https://www.anapioficeandfire.com/api/characters?page=4&pageSize=70");
        }
        // this.getChar = function(url){
        //     return $http.get('https://www.anapioficeandfire.com/api/characters?page=3&pageSize=50rl');
        // }

    
});