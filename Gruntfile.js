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
        clean: {
            css:  [ 'dist/embedded-bootstrap.css'],
            dist: [ 'dist/' ]
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
         imageEmbed: {
            dist: {
              src: [ "vendors/bootstrap/css/bootstrap.css" ],
              dest: "dist/embedded-bootstrap.css",
              options: {
                deleteAfterEncoding : false
              }
            }
        },
        cssmin: {
          compress: {
            files: {
              "dist/main.css": [
                    "dist/embedded-bootstrap.css", 
                    "vendors/bootstrap/css/bootstrap-responsive.css", 
                    "css/app.css"
                ]
            }
          }
        },
        targethtml: {
            dist: {
                files: {
                    'dist/index.html': 'index.html'
                }
            }
        },
        copy: {
            dist: {
                files: [ 
                    {dest: 'dist/require.js', src:'vendors/requirejs/require.js'} 
                ]
                    
                
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks("grunt-image-embed");
    grunt.loadNpmTasks('grunt-targethtml');

    // Default task.
    grunt.registerTask('default', 'lint');

    grunt.registerTask('package', ['clean:dist', 'compile:js', 'compile:css', 'compile:html', 'copy:dist']);
    grunt.registerTask('compile:js', ['requirejs']);
    grunt.registerTask('compile:css', ['imageEmbed', 'cssmin', 'clean:css']);
    grunt.registerTask('compile:html', ['targethtml:dist']);

};
