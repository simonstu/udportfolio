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
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint']);

};