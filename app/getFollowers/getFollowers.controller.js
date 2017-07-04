(function () {
    'use strict';

    angular
        .module('app.getFollowers')
        .controller('GetFollowersController', GetFollowersController);

    GetFollowersController.$inject = ['getFollowersService', '$timeout', '$filter'];

    function GetFollowersController(getFollowersService, $timeout, $filter) {
        var vm = this;

        vm.errorMessage = null;
        vm.followersObj = {};
        vm.getAll = getAll;
        vm.userObj = {};
        vm.username = 'yatso';

        ////////////

        // Clears error message after two seconds to not annoy user.
        function clearErrorMessage() {
            $timeout(function () {
                vm.errorMessage = null;
            }, 2000);
        }

        function failure(error) {
            vm.errorMessage = 'Sorry GitHub username ' + $filter('lowercase')(error.statusText);
            clearErrorMessage();
        }

        function getAll(username) {
            getUser(username);
            getFollowers(username);
        }

        function getFollowers(username) {
            getFollowersService.getFollowers(username).then(successFollowers, failure);
        }

        function getUser(username) {
            getFollowersService.getUser(username).then(successUser, failure);
        }

        function successFollowers(result) {
            vm.followersObj = result.data;
        }

        function successUser(result) {
            vm.userObj = result.data;
        }

    }

})();