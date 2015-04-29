module.exports = function(grunt) {
  var smartlingTemplateHelperTask;
  smartlingTemplateHelperTask = function() {
    return this.files.forEach(function(file) {
      return file.src.forEach(function(path, index) {
        var templates;
        templates = grunt.file.read(path);
        templates = templates.replace(/\ \"(.*?)/mg, '/*<sl:translate_html>*/"').replace(/\ \)\;(.*?)/mg, ');/*</sl:translate_html>*/');
        return grunt.file.write(path, templates);
      });
    });
  };
  return grunt.registerMultiTask('smartlingAngularTemplatesHelper', 'adds smartling tags to the templates', smartlingTemplateHelperTask);
};