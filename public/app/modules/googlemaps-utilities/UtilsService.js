define(['../../app'], function (app) {
    "use strict";
    return app.factory('utilsService', function () {
        var service = {};
        service.createRandomMarker = function(i, bounds, idKey, name) {
            var lat_min = bounds.southwest.latitude,
                lat_range = bounds.northeast.latitude - lat_min,
                lng_min = bounds.southwest.longitude,
                lng_range = bounds.northeast.longitude - lng_min;

            if (idKey == null) {
                idKey = "id";
            }

            var latitude = lat_min + (Math.random() * lat_range);
            var longitude = lng_min + (Math.random() * lng_range);
            var title=name;
            var ret = {
                latitude: latitude,
                longitude: longitude,
                title: title,
                options: {
                    labelClass:'marker_labels',
                    labelAnchor:'10 0',
                    labelContent:title
                }
            };
            ret[idKey] = i;
            return ret;
        };
        return service;
    });
});

