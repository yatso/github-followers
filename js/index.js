var app = angular.module('githubFollowersApp', []);

app.controller('appCtrl', function ($http, $timeout) {
    
    vm = this;
    vm.username = '';
    vm.errorMessage = '';
    vm.fetchAll = function () {
        vm.fetchUserInfo();
        vm.fetchFollowersList();
    }

    vm.fetchUserInfo = function () {
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/' + vm.username
        }).then(
            function (result) {
                console.log(result);
                vm.userObj = result.data;
                console.log(vm.userObj);
            },
            function (error) {
                console.log(error);
                vm.errorMessage = 'Sorry, username not found.';
                // Clear error message after 2 seconds
                $timeout(function(){
                   vm.errorMessage = '';
                }, 2000);
            }
        );
    };

    vm.fetchFollowersList = function () {
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/' + vm.username + '/followers'
        }).then(
            function (result) {
                // console.log(result);
                vm.followersListObj = result.data;
                console.log(vm.followersListObj);
            },
            function (error) {
                console.log(error);
                vm.errorMessage = 'Sorry, username not found.';
                // Clear error message after 2 seconds
                $timeout(function(){
                   vm.errorMessage = '';
                }, 2000);
            }
        );
    };

});