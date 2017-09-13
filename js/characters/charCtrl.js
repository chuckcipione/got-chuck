angular.module('app').controller('charCtrl', function($scope, charSrv){
    $scope.getAllChar = charSrv.getAllChar()
        .then(response => {
            $scope.characters = response.data
            console.log(response.data)
        })

    // $scope.getChar = charSrv.getChar(url).then(res => {
    //     $scope.character = res
    // })
})