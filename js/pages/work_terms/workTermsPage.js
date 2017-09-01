define(['backbone', 'underscore', 'workTermsData', 'workTermView',
  'text!../pages/work_terms/work_terms.html', 'css!../css/pages/work_terms/work_terms.css'],
  function(Backbone, _, WorkTermsData, WorkTermView, workTermsTpl) {
  var WorkTermsPage = Backbone.View.extend({
    
    initialize: function(options) {
      this.render();
    },

    render : function() {
      var template = _.template(workTermsTpl);
      this.$el.html(template({WorkTermsData: WorkTermsData}));

      WorkTermsData.workTerms.forEach(function(workTerm) {
        var workTermView = new WorkTermView({workTerm: workTerm});
        this.$el.find('#workTermsContainer').append(workTermView.el);
      }, this);
    }
  });

  return WorkTermsPage;
});
