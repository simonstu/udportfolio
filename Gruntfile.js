module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'js/perfmatters.min.js' : ['js/perfmatters.js'],
          'views/js/main.min.js' : ['views/js/main.js']
        }
      }
    },
    jshint: {
      all: ['views/js/main.js', 'js/perfmatters.js']
    },
    imagemin: {
      jpg: {
        options: {
          progressive : true
        },
        files: [
          {
            expand: true,
            cwd: 'img/',
            src: ['**/*.jpg'],
            dest: 'img/compressed/',
            ext: '.jpg'
          },
          {
            expand: true,
            cwd: 'views/images/',
            src: ['**/*.jpg'],
            dest: 'views/images/compressed/',
            ext: '.jpg'
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'imagemin']);

};