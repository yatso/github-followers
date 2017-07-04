(function () {
    'use strict';

    angular
        .module('app.getFollowers')
        .factory('getFollowersService', getFollowersService);

    getFollowersService.$inject = ['$http'];

    function getFollowersService($http) {

        var service = {
            getUser: getUser,
            getFollowers: getFollowers
        };

        return service;

        ////////////

        function getUser(username) {
            return $http.get('https://api.github.com/users/' + username);
        }

        function getFollowers(username) {
            return $http.get('https://api.github.com/users/' + username + '/followers');
        };

    }

})();