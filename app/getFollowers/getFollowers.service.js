(function () {
    'use strict';

    angular
        .module('app.getFollowers')
        .factory('getFollowersService', getFollowersService);

    getFollowersService.$inject = ['$http'];

    function getFollowersService($http) {

        var service = {
            getFollowers: getFollowers,
            getUser: getUser
        };

        return service;

        ////////////

        function getFollowers(username) {
            return $http.get('https://api.github.com/users/' + username + '/followers');
        };

        function getUser(username) {
            return $http.get('https://api.github.com/users/' + username);
        }

    }

})();