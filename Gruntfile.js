module.exports = function(grunt){
    'use strict';

	grunt.initConfig({
		ngtemplates:  {
			options:{
	        	module: 'my-templates',
	        	standalone: true,
	        	prefix: '/'
	    	},
	   		main : {
	        	src: ['components/**/*.tpl.html'],
	        	dest: 'global/templates.js'
	    	}
	    },
	    concat: {
	        options:{
	            nonull: true
	        },
	        scripts:{
	        	src:[
	        		'dev/global/templates.js',
	        		'dev/global/app.js',
	        		'dev/global/services/**/*.js',
	        		'dev/components/**/*.js'
	        	],
	        	dest:'dev/all-together/scripts.js'
	        }
	    },
	    watch:{
	    	scripts: {
				files: 'dev/**/*.js',
				tasks: ['concat:scripts']
	    	}
	    }
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
};