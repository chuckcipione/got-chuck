angular.module('app').controller('detailCtrl', function($scope, charSrv, $stateParams){
    // $scope.getAllChar = function(){
    //     detailSrv.getAllChar().then(function(response){
    //         $scope.character = response;
    //     })
    // }
    // $scope.getAllChar($stateParams.charId);

    // $scope.oneChar = charSrv.charContainer.filter(function(val) {
    //     console.log(val);
    //     if(val.url.indexOf($stateParams.charId) > -1) {
    //         return val;
    //     }
    // })[0];
    var id = $stateParams.charId;
    charSrv.getOneChar(id).then(function(response) {
        console.log(response);
        $scope.character = response.data;
        
    })
    // console.log($scope.oneChar);
});