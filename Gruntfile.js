module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    wiredep: {
      task: {
        src: ['app/index.html']
      }
    },
    uglify: {
      dist: {
        files: {
          "app/dist/app.min.js": "app/scripts/app.js",
          "app/dist/app.module.min.js": "app/scripts/**/*.module.js",
          "app/dist/app.service.min.js": "app/scripts/**/*.service.js",
          "app/dist/app.controller.min.js": "app/scripts/**/*.controller.js",
          "app/dist/app.directive.min.js": "app/scripts/**/*.directive.js"
        }
      }
    },
    watch: {
      files: ["app/scripts/app.js", "app/scripts/**/*.js"],
      tasks: ["uglify"]
    }
  });

  grunt.registerTask('default', ['wiredep']);
};