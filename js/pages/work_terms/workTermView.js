define(['backbone', 'underscore',
  'text!../pages/work_terms/work_term.html', 'css!../css/pages/work_terms/work_term.css'],
  function(Backbone, _, workTermTpl) {
  var WorkTermView = Backbone.View.extend({
    
    initialize : function(options) {
      this.workTerm = options.workTerm;
      this.render();
    },

    render : function() {
      var template = _.template(workTermTpl);
      this.$el.html(template({workTerm: this.workTerm}));
    }
  });

  return WorkTermView;
});
