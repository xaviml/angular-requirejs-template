define(['../app'], function (app) {
    "use strict";
    return app.factory('myService', function ($resource) {
        return $resource(REST_HOST + 'myService/:id',
            {
                myparameter: 'parameter'
            },
            {
                findAll: {
                    method: "GET",
                    isArray: true
                },
                findOther: {
                    method: "GET",
                    isArray: false
                },
                findMe: {
                    method: "GET",
                    isArray: false,
                    params: {
                        id: "me"
                    }
                },
                update: {
                    method: "PUT"
                }
            }
        );
    });
});

