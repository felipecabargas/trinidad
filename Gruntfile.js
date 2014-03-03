module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'http-server': {
      dev: {
        root: 'app/',
        port: 9000,
        host: '127.0.0.1',
        cache: 300,
        showDir : true,
        autoIndex: true,
        defaultExt: 'html',
        runInBackground: false
      }
    },

    jasmine: {
      jstrees: {
        src: 'app/**/*.js',
        options: {
          specs: 'specs/*Spec.js',
          helpers: 'specs/*Helper.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-http-server');

}