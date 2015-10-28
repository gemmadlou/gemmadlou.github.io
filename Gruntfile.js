'use strict';

module.exports = function(grunt) {

	
	grunt.initConfig({
		sass: {
			dist: {
				ooptions: { 
					style: 'expanded'
				},
				files: { 
					'dist/css/main.css': 'src/sass/main.scss',
					'styleguide/source/css/main.css': 'src/sass/main.scss',
				}
			}
		},
		watch: {
			styles: {
				files: ['src/sass/**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['sass']);

}