module.exports = (grunt) ->

	smartlingTemplateHelperTask = ->
		
		this.files.forEach (file) ->
			file.src.forEach (path, index) ->
				templates = grunt.file.read(path)
				# do smartling replace
				templates = templates.replace(/\ \"(.*?)/mg , '/*<sl:translate_html>*/"')
									 .replace(/\ \)\;(.*?)/mg, ');/*</sl:translate_html>*/')
				grunt.file.write(path, templates)

	grunt.registerMultiTask 'smartlingAngularTemplatesHelper', 'adds smartling tags to the templates', smartlingTemplateHelperTask
