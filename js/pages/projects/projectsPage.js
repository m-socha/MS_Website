define(['backbone', 'underscore', 'projectsData', 'projectView',
  'text!../pages/projects/projects.html', 'css!../css/pages/projects/projects.css'],
  function(Backbone, _, ProjectsData, ProjectView, projectsTpl) {
  var ProjectsPage = Backbone.View.extend({
    
    initialize: function(options) {
      this.render();
    },

    render : function() {
      var template = _.template(projectsTpl);
      this.$el.html(template({ProjectsData: ProjectsData}));

      ProjectsData.projects.forEach(function(project) {
        var projectView = new ProjectView({project: project});
        this.$el.find('#projectsContainer').append(projectView.el);
      }, this);
    }
  });

  return ProjectsPage;
});
