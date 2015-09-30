module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {},
        connect: {
            server: {
                options: {
                    port: 9100,
                    base: 'public/',
                    hostname: '0.0.0.0',
                    livereload: 35729,
                    debug: true,
                    middleware: function (connect, options) {
                        var middlewares = [];

                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);
                        //middlewares.push(lrSnippet);

                        // Serve static files
                        options.base.forEach(function (base) {
                            middlewares.push(connect.static(base));
                        });

                        return middlewares;
                    }
                },
                proxies: [{
                    context: '/aggregator',
                    host: '192.168.4.83',
                    port: 8080,
                    ws: false,
                    changeOrigin: true
                    , rewrite: {
                        // the key '^/api' is a regex for the path to be rewritten
                        // the value is the context of the data service
                        '^/aggregator/': '/'
                    }
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', 'Connect server', function () {
        grunt.task.run([
            'configureProxies:server',
            'connect:server',
            'watch'
        ]);
    });

};