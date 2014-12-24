module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
      target: {
        files: [{
          expand: true,
          src: 'captionss.css',
          dest: '.',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']);

};
