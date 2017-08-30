define(['backbone', 'underscore'],
  function(Backbone, _) {
  var AboutPage = Backbone.View.extend({

    initialize : function(options) {
      this.render();
    },

    render : function() {
      this.$el.html("hello test test");
    }
  });

  return AboutPage;
});
