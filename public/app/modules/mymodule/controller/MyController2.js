define(['../module'], function (module) {
    'use strict';
    module.controller('myController2', [
        '$scope',
        'myService',
        function ($scope, myService) {
            $scope.me = myService.findMe();
            $scope.other = myService.findOther({id: 42});
        }
    ]);
});
