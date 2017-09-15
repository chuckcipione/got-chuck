angular.module('app').controller('charCtrl', function($scope, charSrv){
    
    // console.log($stateParams)
    
    $scope.getAllChar = charSrv.getAllChar()
        .then(response => {
          

            var idd  = response.map( (dude,idx,arr) => dude.url.match( /\d+/g))

        
        
      

            // console.log(response)
         
            $scope.idd = response.map( (dude,idx,arr) => dude.url.match( /\d+/g))

            console.log($scope.idd)
            $scope.characters = response;

            
        });
        // i = 0;
        // setInterval(function() {
        //   i = ++i % 4;
        // }, 800);

        // $scope.chars = charSrv.charContainer

    // $scope.getChar = charSrv.getChar(url).then(res => {
    //     $scope.character = res
    // })
})