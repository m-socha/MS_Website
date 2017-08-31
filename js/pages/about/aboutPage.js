define(['backbone', 'underscore', 'linkUtil', 'mouseEnterLeaveAnimation',
  'text!../pages/about/about.html', 'css!../css/pages/about/about.css'],
  function(Backbone, _, LinkUtil, MouseEnterLeaveAnimation, aboutTpl) {
  var AboutPage = Backbone.View.extend({

    events: {
      'click #aboutResumeButton': 'openResume' 
    },

    initialize : function(options) {
      this.LinkUtil = LinkUtil;
      this.render();
    },

    render : function() {
      var template = _.template(aboutTpl); 
      this.$el.html(template({LinkUtil: this.LinkUtil}));
      
      MouseEnterLeaveAnimation.setupAnimation(
        this.$el.find('.aboutContactItem'),
        {'width': '180px', 'height': '180px'},
        200,
        {'width': '140px', 'height': '140px'},
        100,
        '.aboutContactItemImage'
      );
    },

    openResume : function() {
      window.open(LinkUtil.docLink("Michael_Socha_Resume.pdf"), "_blank");
    }
  });

  return AboutPage;
});
