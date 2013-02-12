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

    // Default task.
    grunt.registerTask('default', 'lint');
};