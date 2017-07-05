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

        function onFail(error) {
            vm.errorMessage = 'Sorry GitHub username ' + $filter('lowercase')(error.statusText);
            clearErrorMessage();
        }

        function getAll(username) {
            getUser(username);
            getFollowers(username);
        }

        function getFollowers(username) {
            getFollowersService.getFollowers(username).then(onFollowersSuccess, onFail);
        }

        function getUser(username) {
            getFollowersService.getUser(username).then(onUserSuccess, onFail);
        }

        function onFollowersSuccess(result) {
            vm.followersObj = result.data;
        }

        function onUserSuccess(result) {
            vm.userObj = result.data;
        }

    }

})();