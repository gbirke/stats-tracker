module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        beautify: {
            files: ['app/*.js', 'grunt.js']
        },
        lint: {
            all: ['app/*.js', 'grunt.js']
        },
        beautifier: {
            options: {
                indentSize: 4
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'app',
                    findNestedDependencies: true,
                    logLevel: 3,
                    mainConfigFile: './app/main.js',
                    name: "main",
                    optimize:"none",
                    //name: 'libs/almond',
                    //include: 'main',
                    //optimize: 'uglify2',
                    //optimizeCss: 'none',
                    out: './dist/main.js'
                    //wrap: true
                }
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
                es5: false,
                strict: false
            },
            globals: {}
        }
    });

    // NPM tasks
    grunt.loadNpmTasks('grunt-beautify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task.
    grunt.registerTask('default', 'lint');
};
