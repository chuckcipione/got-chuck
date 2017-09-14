angular.module('app').controller('detailCtrl', function($scope, detailSrv, $stateParams){
    $scope.getAllChar = function(){
        detailSrv.getAllChar().then(function(response){
            $scope.character = response;
        })
    }
    $scope.getAllChar($stateParams.charId);
})