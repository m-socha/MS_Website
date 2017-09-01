define(['jquery', 'jqueryColor', 'backbone', 'underscore', 'linkUtil',
  'mouseEnterLeaveAnimation', 'text!../pages/about/about.html',
  'css!../css/pages/about/about.css'],
  function($, jqueryColor, Backbone, _, LinkUtil,
    MouseEnterLeaveAnimation, aboutTpl) {
  var AboutPage = Backbone.View.extend({

    events: {
      'click #aboutResumeButton': 'openResume',
      'click #aboutContactGithubItem': 'openGithub',
      'click #aboutContactStackoverflowItem': 'openStackoverflow',
      'click #aboutContactLinkedinItem': 'openLinkedin'
    },

    initialize : function(options) {
      this.render();
    },

    render : function() {
      var template = _.template(aboutTpl); 
      this.$el.html(template({LinkUtil: LinkUtil}));

      MouseEnterLeaveAnimation.setupAnimation(
        this.$el.find('#aboutResumeButton'),
        {'background-color': '#6F9AA8'},
        200,
        {'background-color': '#7FAAB8'},
        100
      );

      MouseEnterLeaveAnimation.setupAnimation(
        this.$el.find('.aboutContactItem'),
        {'width': '180px', 'height': '180px'},
        200,
        {'width': '140px', 'height': '140px'},
        100,
        '.aboutContactItemImage'
      );

      MouseEnterLeaveAnimation.setupAnimation(
        this.$el.find('.aboutContactItem'),
        {'background-color': '#8FBAC8'},
        200,
        {'background-color': '#7FAAB8'},
        100
      );
    },

    openResume : function() {
      window.open(LinkUtil.docLink("Michael_Socha_Resume.pdf"), "_blank");
    },

    openGithub : function() {
      window.open("https://github.com/m-socha", "_blank");
    },

    openStackoverflow: function() {
      window.open("http://stackoverflow.com/users/5266538/michael", "_blank");
    },

    openLinkedin : function() {
      window.open("https://ca.linkedin.com/in/michael-socha-14002661", "_blank");
    }
  });

  return AboutPage;
});
