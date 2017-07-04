(function () {
    'use strict';

    angular
        .module('app', [
            // Angular modules.
            'ngRoute',

            // Custom modules.
            'app.getFollowers',
            'app.layout'
        ])
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/getFollowers'
        });
    }

})();