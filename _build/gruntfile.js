'use strict';

module.exports = function(grunt) {
    var initConfig = {
        pkg: grunt.file.readJSON('package.json'),
        dirs:{
            'awesome':'../awesome/'
        },
		bower: {
			install: {
				options: {
					targetDir: './lib',
					layout:'byComponent'
				}
			}
		},
		'font-awesome-list':{
			list:{
				options:{
					src:'./lib/font-awesome/scss/_icons.scss',
                    dest:'./temp/font-awesome-icons.txt'
				}
			}
		},
        'string-replace':{},
		clean: { /* take out the trash */
			postbuild: ['./temp','./lib']
		},
        growl:{
			fa: {
				title: "grunt",
				message: "Font-Awesome updated."
			},
        }
	};
    
    if(grunt.file.isFile('./temp/font-awesome-icons.txt')) {
        initConfig['string-replace'] = {
            fa: {
                files: [
                    {src:'<%= dirs.awesome %>redactor-awesome.js',dest:'<%= dirs.awesome %>redactor-awesome.js'}
                ],
                options: {
                    replacements:[{
						pattern:/(icons:)(.*)/gi,
						replacement:'icons: ' + grunt.file.read('./temp/font-awesome-icons.txt')
                    }]
                }
            }
        };
    }
    
	grunt.initConfig(initConfig);
	
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-font-awesome-list');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-growl');
    
    grunt.registerTask('list',['bower','font-awesome-list']); // always run list before fa ex: grunt list && grunt fa
    grunt.registerTask('fa',['string-replace','growl:fa','clean:postbuild']);
};