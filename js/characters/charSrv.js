angular.module('app').service('charSrv', function($http, $q){
        var pageCount = 1;    
        var charContainer = [];
        var pageSize = '&pageSize=50';        
        var deferred = $q.defer();        
        this.getAllChar = () => {
             $http.get("https://www.anapioficeandfire.com/api/characters?page=" + pageCount + pageSize).then(response => {
                if (response.data.length === 50) {
                    pageCount++;
                    charContainer.push(...response.data);
                    this.getAllChar();
                } else {
                    charContainer.push(...response.data);
                    deferred.resolve(charContainer);
                }
            });
            return deferred.promise;
        }
        // this.getChar = function(url){
        //     return $http.get('https://www.anapioficeandfire.com/api/characters?page=3&pageSize=50rl');
        // }

    
});