angular.module('app').controller('charCtrl', function($scope, charSrv){
    $scope.getAllChar = charSrv.getAllChar()
        .then(response => {
            $scope.characters = response
            console.log(response)
        });

        // $scope.chars = charSrv.charContainer

    // $scope.getChar = charSrv.getChar(url).then(res => {
    //     $scope.character = res
    // })
})