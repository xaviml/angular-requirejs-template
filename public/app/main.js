require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router',
        'angular-bootstrap': '../lib/angular-bootstrap/ui-bootstrap-tpls',
        'angular-resource': '../lib/angular-resource/angular-resource',
        'domReady': '../lib/requirejs-domready/domReady',
        'chart': '../lib/Chart.js/Chart',
        'angular-chart': '../lib/angular-chart.js/angular-chart',
        'lodash' : '../lib/lodash/lodash.min',
        'angular-simple-logger' : '../lib/angular-simple-logger/dist/angular-simple-logger.min',
        'angular-google-maps' : '../lib/angular-google-maps/dist/angular-google-maps.min'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'chart': {
            exports: 'chart.js'
        },
        'lodash': {
            deps: ['angular']
        },
        'angular-simple-logger': {
            deps: ['angular']
        },
        'angular-chart': {
            deps: ['angular', 'chart']
        },
        'angular-google-maps': {
            exports: 'angular-google-maps',
            deps: ['lodash', 'angular', 'angular-simple-logger']
        }
    },

    deps: [
        './bootstrap'
    ]
});
