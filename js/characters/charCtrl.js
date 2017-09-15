angular.module('app').controller('charCtrl', function($scope, charSrv){
    
    // console.log($stateParams)
    
    $scope.getAllChar = charSrv.getAllChar()
        .then(response => {
            console.log(response)
            $scope.characters = response
            console.log(response)
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