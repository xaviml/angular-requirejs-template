define(['./../app','angular'], function (app, ng) {

    'use strict';

    return app.filter('emailFilter', function () {
        return function(items, checkbox) {
            if(!checkbox) return items;
            var filtered = [];
            ng.forEach(items, function(item) {
                if(item.email != undefined) {
                    filtered.push(item);
                }
            });
            return filtered;
        }
    });
});