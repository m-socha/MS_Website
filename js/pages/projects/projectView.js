define(['backbone', 'underscore',
  'text!../pages/projects/project.html', 'css!../css/pages/projects/project.css'],
  function(Backbone, _, projectTpl) {
  var ProjectView = Backbone.View.extend({
    
    initialize : function(options) {
      this.project = options.project;
      this.render();
    },

    render : function() {
      var template = _.template(projectTpl);
      this.$el.html(template({project: this.project}));
    }
  });

  return ProjectView;
});
