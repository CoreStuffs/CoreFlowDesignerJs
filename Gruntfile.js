const sass = require('node-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        'sass': {                              // Task
                                       // Target
              options: {                       // Target options
                implementation: sass,
                sourceMap: true
              },
              dist: { 
                files: {                         // Dictionary of files
                    './dist/designsurface.css': './src/css/designsurface.scss',       // 'destination': 'source'
                }
            
            }
          },
          cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                './dist/designsurface.min.css': ['./dist/designsurface.css']
              }
            }
          },
        'terser': {
            js: {
                files: {
                    './dist/coreflowdesigner.builder.min.js': [
                        "./src/js/uikit.js",
                        "./src/js/uikit-icons.js",
                        "./src/js/vuelidate.min.js",
                        "./src/js/validators.min.js",
                        "./src/js/sortable.min.js",                     
                        "./src/js/designsurface.js"
                    ]
                }
            }
        },
        remove_comments: {
          js: {
            options: {
              multiline: true,
              singleline: true,
              keepSpecialComments: false
            },
            cwd: './dist/',
            src: '*.js',
            expand: false,
            dest: 'dist/'
          },
          css: {
            options: {
              multiline: true,
              singleline: true,
              keepSpecialComments: false,
              linein: true,
              isCssLinein: true
            },
            cwd: './dist/',
            src: '*.css',
            expand: true,
            dest: 'dist/'
          }
        },
        svgcss: {
          defaultOptions: {
            files: {
              './src/css/sprites.css': ['./src/img/*.svg']
            }
          }
        }
    });
    grunt.loadNpmTasks("grunt-terser");
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-remove-comments');
    grunt.loadNpmTasks('grunt-svg-css');
    grunt.registerTask('build-dev', ['svgcss:defaultOptions', 'sass:dist']);
    grunt.registerTask('build-dist', ['svgcss:defaultOptions', 'sass:dist', 'cssmin:target','terser:js','remove_comments:js','remove_comments:css']);

};