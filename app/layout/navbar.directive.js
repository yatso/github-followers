(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('gfNavbar', gfNavbar);

    function gfNavbar() {
        return {
            templateUrl: 'app/layout/navbar.html',
            restrict: 'E',
            scope: {},
            controller: NavbarController,
            controllerAs: 'vm'
        };
    }

    NavbarController.$inject = [];

    function NavbarController() {}

})();