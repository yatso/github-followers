var app = angular.module('githubFollowersApp', []);

app.controller('appCtrl', function ($scope, $http) {
    $scope.username = "yatso";
    $scope.fetchAll = function () {
        $scope.fetchUserInfo();
    }
    $scope.fetchUserInfo = function () {
        $http({
            method: "GET",
            url: "https://api.github.com/users/" + $scope.username
        }).then(
            function (result) {
                console.log(result);
                $scope.userObj = result.data;
                console.log($scope.userObj);
            },
            function (error) {
                console.log(error);
            }
        );
    };
});