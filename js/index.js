var app = angular.module('githubFollowersApp', []);

app.controller('appCtrl', function ($scope, $http) {
    $scope.username = "yatso";
    $scope.fetchAll = function () {
        $scope.fetchUserInfo();
        $scope.fetchFollowersList();
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
                console.log('Uh oh! Sorry something is wrong. If you typed in the right username, it\'s probably not your fault!', error);
            }
        );
    };
    
    $scope.fetchFollowersList = function() {
      $http({
        method: "GET",
        url: "https://api.github.com/users/" + $scope.username + "/followers"
      }).then(
        function(result) {
          // console.log(result);
          $scope.followersListObj = result.data;
          console.log($scope.followersListObj);
        },
        function(error) {
          console.log(error);
        }
      );
    };
    
});