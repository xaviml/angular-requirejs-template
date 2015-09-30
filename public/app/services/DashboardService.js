define(['../app'], function (app) {
    "use strict";
    return app.factory('dashboardService', function ($http) {
        var service = {};
        service.getUserDashboardData = function(CallbackOK, CallbackFail) {
            $http({
                method: 'GET',
                url: REST_HOST+'stats/user'
            }).then(function successCallback(response) {
                return CallbackOK(response);
            }, function errorCallback(response) {
                return CallbackFail(response);
            });
        };
        return service;
    });
});

