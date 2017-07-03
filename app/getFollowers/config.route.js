(function () {
    'use strict';

    angular
        .module('app.getFollowers')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/getFollowers', {
            templateUrl: 'app/getFollowers/getFollowers.html',
            controller: 'GetFollowersController',
            controllerAs: 'vm'
        });
    }

})();