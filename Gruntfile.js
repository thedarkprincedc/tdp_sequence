'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
  	config : grunt.file.readJSON('./gruntconfig.json'),
  	clean: {
      build: ["build"],
  	},
  	requirejs: {
      compile: {
      	options: {
      		baseUrl: '.',
        	mainConfigFile: 'app.js',
        	out: 'build/app.js',
        	name: "Init"
      	}
      }
  	},
    jshint: {
      all : ["Gruntfile.js"]
    },
    watch: {
      scripts: {
        files: 'js/*.js',
        tasks: ['jshint'],
        options: {
          interrupt: true,
          reload: true
        },
      },
    },
  	copy: {
      build : {
    	files : [{
            expand: true,
            src : '<%= config.paths.build_exclusions %>',          
            dest : '<%= config.paths.build_path %>',
            filter : 'isFile'
          }
        ]
      }
  	}
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask("default", ["clean:build", "copy:build", "requirejs"]);
};