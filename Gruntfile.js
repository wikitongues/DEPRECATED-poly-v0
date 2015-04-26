'use strict';

var
    LIVERELOAD_PORT = 35729,
    lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT}),
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

module.exports = function (grunt) {
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /templates\//
                },
                files: {
                  "js/scripts/templates.js": "**/*.handlebars"
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ['stylus/'],
                    import: ['../variables']
                },
                files: {
                    'css/style.css' : 'css/stylus/*.styl',
                }
            }
        },
        watch: {
            files: [
                'index.html',
                'js/**/*.js'
            ],
            ember_templates: {
                files: 'templates/**/*.handlebars',
                tasks: ['emberTemplates']
            },
            stylus: {
                files: ['css/stylus/*.styl'],
                tasks: ['stylus']
            },
            livereload: {
                options: { livereload: LIVERELOAD_PORT },
                files: ['css/style.css', 'index.html', 'js/**/*.js']
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function( connect ) {
                        return [
                            lrSnippet,
                            mountFolder(connect, './')
                        ];
                    }
                }
            }
        }
    });

    grunt.registerTask('server', function() {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'stylus',
        'emberTemplates',
        'server'
    ]);
};
