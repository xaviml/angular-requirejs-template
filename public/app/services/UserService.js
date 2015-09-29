define(['../app'], function (app) {
    "use strict";
    return app.factory('userService', function ($resource) {
        return $resource(REST_HOST + 'user/:id',
            {
                id: "@id"
            },
            {
                update: {
                    method: "PUT",
                    action: ""
                }
            }
        );
    });
});

