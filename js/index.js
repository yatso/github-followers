var app = angular.module('githubFollowersApp', []);

app.controller('appCtrl', function ($scope, $http, $timeout) {
    $scope.username = '';
    $scope.errorMessage = '';
    $scope.fetchAll = function () {
        $scope.fetchUserInfo();
        $scope.fetchFollowersList();
    }

    $scope.fetchUserInfo = function () {
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/' + $scope.username
        }).then(
            function (result) {
                console.log(result);
                $scope.userObj = result.data;
                console.log($scope.userObj);
            },
            function (error) {
                console.log(error);
                $scope.errorMessage = 'Sorry, username not found.';
                // Clear error message after 2 seconds
                $timeout(function(){
                   $scope.errorMessage = '';
                }, 2000);
            }
        );
    };

    $scope.fetchFollowersList = function () {
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/' + $scope.username + '/followers'
        }).then(
            function (result) {
                // console.log(result);
                $scope.followersListObj = result.data;
                console.log($scope.followersListObj);
            },
            function (error) {
                console.log(error);
                $scope.errorMessage = 'Sorry, username not found.';
                // Clear error message after 2 seconds
                $timeout(function(){
                   $scope.errorMessage = '';
                }, 2000);
            }
        );
    };

});