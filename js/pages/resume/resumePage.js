define(['jquery', 'backbone', 'underscore', 'linkUtil',
  'text!../pages/resume/resume.html', 'css!../css/pages/resume/resume.css'],
  function($, Backbone, _, LinkUtil, resumeTpl) {
    var ResumePage = Backbone.View.extend({
      
      initialize : function(options) {
        this.render();
      },

      render : function() {
        var template = _.template(resumeTpl);
        this.$el.html(template({LinkUtil: LinkUtil}));

        this.$el.find('#resumeFrame').height($('#pageHolder').height());
      }
    });

    return ResumePage;
});
