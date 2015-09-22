define(['../module'], function (module) {
    'use strict';
    module.controller('myController', [
        '$scope',
        function ($scope) {
            $scope.controllerName = 'myController';
        }
    ]);
});
