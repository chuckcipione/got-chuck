angular.module('app').service('charSrv', function($http, $q){
        this.charContainer = [];
        var pageCount = 1;    
        var pageSize = '&pageSize=50';        
        var deferred = $q.defer();        
        this.getAllChar = () => {
            
             $http.get("https://www.anapioficeandfire.com/api/characters?page=" + pageCount + pageSize).then(response => {
                //  console.log(response.data.map( (dude,idx,arr) => dude.url.match( /\d+/g)))

                    var tempObj = {
                            id : response.data.map( (dude,idx,arr) => dude.url.match( /\d+/g))
                    }

              
                if (response.data.length === 50) {
                    pageCount++;
                    this.charContainer.push(...response.data);
                    this.getAllChar();
                } else {
                    this.charContainer.push(...response.data);
                    deferred.resolve(this.charContainer);
                }
            });
            // return {
            //     promise : deferred.promise,
            //     id : deferred.promise.
            //  }
            console.log( 'deferred promise:', deferred.promise );
            return deferred.promise;
        }
        // this.getChar = function(url){
        //     return $http.get('https://www.anapioficeandfire.com/api/characters?page=3&pageSize=50rl');
        // }

        this.getOneChar = function(id) {
            return $http.get('https://www.anapioficeandfire.com/api/characters/' + id)
            // .then( response =>{
            //     console.log(response)
            // })
        }
});