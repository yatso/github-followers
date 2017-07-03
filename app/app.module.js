(function () {
    'use strict';

    angular
        .module('app', [
            // Angular modules.
            'ngRoute',

            // Custom modules.
            'app.getFollowers'
        ])
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider
            .when('/getFollowers', {
                templateUrl: 'app/getFollowers/getFollowers.html',
                controller: 'GetFollowersController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/getFollowers'
            });
    }


})();