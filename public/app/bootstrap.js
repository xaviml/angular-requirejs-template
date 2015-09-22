define([
    'require',
    'angular',
    'config',
    'includes',
    'app'
], function (require, ng, config, includes, app) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });

    app.run(function() {
        console.log("Init the web app");
    });
});
