
module.exports = function(grunt){

	// Project configuration. 
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		concat: {
		    dist: {
		      src: 'js/custom.js',
		      dest: 'built.js',
		    }
		},

		uglify: {
			dist: {
				src: 'built.js',
				dest: 'built.min.js'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/style.css': 'css/style.scss'
				}
			}
		},

		watch: {
			css: {
            	files: ['**/*.scss'],
            	tasks: ['sass'],
            	options: {
                spawn: false,
                livereload: true,
            	}
        	}
		}
});



	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'sass']);
	grunt.registerTask('dev', ['watch']);

};