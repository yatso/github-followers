(function () {
    'use strict';

    angular
        .module('app.getFollowers')
        .controller('GetFollowersController', GetFollowersController);

    GetFollowersController.$inject = ['getFollowersService', '$timeout','$filter'];

    function GetFollowersController(getFollowersService, $timeout, $filter) {

        var vm = this;

        vm.username = 'yatso';
        vm.errorMessage = null;
        vm.userObj = {};
        vm.followersObj = {};
        vm.getAll = getAll;

        ////////////

        function getAll(username) {
            getUser(username);
            getFollowers(username);
        }

        function getUser(username) {
            getFollowersService.getUser(username).then(successUser, failure);
        }

        function getFollowers(username) {
            getFollowersService.getFollowers(username).then(successFollowers, failure);
        }

        function successUser(result) {
            vm.userObj = result.data;
        }

        function successFollowers(result) {
            vm.followersObj = result.data;
        }

        function failure(error) {
            vm.errorMessage = 'Sorry GitHub username ' + $filter('lowercase')(error.statusText);
            clearErrorMessage();
        }
        
        // Clears error message after two seconds to not annoy user.
        function clearErrorMessage() {
            $timeout(function () {
                vm.errorMessage = null;
            }, 2000);
        }

    }

})();