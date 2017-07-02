var app = angular.module('githubFollowersApp', []);

app.controller('appCtrl', function ($scope) {
    $scope.username = 'yatso';
    $scope.fetchAll = function () {
        console.log('this function will fetch github api results for ' + $scope.username);
    };
});