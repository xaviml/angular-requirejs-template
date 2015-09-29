define(['../module'], function (module) {
    'use strict';
    module.controller('userDetailController', [
        '$scope',
        '$state',
        '$stateParams',
        'userService',
        function ($scope, $state, $stateParams, service) {

            debugger;

            //get - GET object
            //query - GET array
            //save - POST
            //delete & remove - DELETE
            $scope.users = service.query();



            $scope.edit = function (user) {

            };


            $scope.delete = function (user) {
                user.$delete(
                    function () {
                        $scope.users.pop(user);
                    }
                );
            };
        }
    ]);
});
