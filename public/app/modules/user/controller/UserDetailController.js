define(['../module'], function (module) {
    'use strict';
    module.controller('userDetailController', [
        '$scope',
        '$state',
        '$stateParams',
        'userService',
        function ($scope, $state, $stateParams, service) {

            $scope.isNew = $stateParams.id == undefined || $stateParams.id == "new";

            $scope.form = {};
            $scope.user = {};
            if (!$scope.isNew)
                $scope.user = service.get({id: $stateParams.id});


            $scope.submitForm = function (form) {
                if (form.$valid) {
                    if ($scope.isNew) {
                        service.save($scope.user, function () {
                            $state.go("dashboard");
                        });
                    } else {
                        service.update({id:$scope.user.id}, $scope.user, function() {
                            $state.go("userlist");
                        });
                    }
                }
            }
        }
    ]);
});
