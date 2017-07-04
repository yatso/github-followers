(function () {
    'use strict';

    angular
        .module('app.getFollowers')
        .factory('getFollowersService', getFollowersService);

    getFollowersService.$inject = ['$http'];

    function getFollowersService($http) {

        var service = {
            fetchUser: fetchUser,
            fetchFollowers: fetchFollowers
        };

        return service;

        ////////////

        function fetchUser(username) {
            return $http.get('https://api.github.com/users/' + username);
        }

        function fetchFollowers(username) {
            return $http.get('https://api.github.com/users/' + username + '/followers');
        };

    }

})();