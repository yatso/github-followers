(function () {
    'use strict';

    angular
        .module('app.getFollowers')
        .controller('GetFollowersController', GetFollowersController);

    GetFollowersController.$inject = ['getFollowersService', '$timeout'];

    function GetFollowersController(getFollowersService, $timeout) {

        var vm = this;

        vm.username = null;
        vm.errorMessage = null;
        vm.userObj = {};
        vm.followersObj = {};
        vm.fetchAll = fetchAll;

        function fetchAll(username) {
            fetchUser(username);
            fetchFollowers(username);
        }

        function fetchUser(username) {
            getFollowersService.fetchUser(username).then(successUser, failure);
        }

        function fetchFollowers(username) {
            getFollowersService.fetchFollowers(username).then(successFollowers, failure);
        }

        function successUser(result) {
            vm.userObj = result.data;
        }

        function successFollowers(result) {
            vm.followersObj = result.data;
        }

        function failure(error) {
            vm.errorMessage = 'Sorry GitHub Username ' + error.statusText;
            clearErrorMessage();
        }

        function clearErrorMessage() {
            $timeout(function () {
                vm.errorMessage = null;
            }, 2000);
        }

    }

})();