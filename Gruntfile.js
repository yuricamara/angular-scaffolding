'use strict';

module.exports = function(grunt){

  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /********************************************************
        Tasks config
    *********************************************************/

    /*********************
      Angular
    **********************/

    ngtemplates:  {
      options:{
        module: 'templates',
        standalone: true,
        prefix: '/'
      },
      main : {
        src: [
          'src/components/**/*.tpl.html',
          'src/states/**/*.tpl.html'
        ],
        dest: 'src/global/angular/templates.js'
      }
    },

    /*********************
      Build/Dev
    **********************/
    concat: {
        options:{
          nonull: true
        },
        dev:{
          src:[
            'src/global/angular/templates.js',
            'src/global/angular/app.js',
            'src/global/angular/services/**/*.js',
            'src/components/**/*.js'
          ],
          dest:'src/global/scripts.js'
        }
    },
    copy: {
      deploy: {
        src: 'src/index.html',
        dest: 'public/index.html',
      }
    },
    filerev: {
      deploy: {
        src: [
          'public/scripts.js',
          'public/stylesheets.css'
        ]
      }
    },
    useminPrepare: {
      html: 'public/index.html',
      options: {
        root: './src/',
        dest: 'public/'
      }
    },
    usemin: {
      html: 'public/index.html'
    },

    /*********************
      Clean
    **********************/
    clean:{
      tmp: '.tmp',
      public: 'public'
    },

    /*********************
      Watch
    **********************/

    watch:{
      options:{
        atBegin: true
      },
      create_templates:{
        files: [
          'src/components/**/*.tpl.html',
          'src/states/**/*.tpl.html'
        ],
        tasks: ['ngtemplates:main']

      },
      concat_dev: {
        files: [
          'src/**/*.js',
          '!src/global/scripts.js'
        ],
        tasks: ['concat:dev']
      }
    }
  });

  /********************************************************
      Tasks execution
  *********************************************************/
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');

  /**********************************
    build tasks
  ***********************************/

  grunt.registerTask('build', [
    'clean',
    'ngtemplates:main',
    'concat:dev',
    'copy:deploy',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'filerev',
    'usemin'
  ]);
};
