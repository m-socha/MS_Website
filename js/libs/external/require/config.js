requirejs.config({
  baseUrl: 'js',
  paths: {
    text: 'libs/external/require/plugins/textJS',
    css: 'libs/external/require/plugins/css.min',
    jquery: 'libs/external/jquery/jquery-3.2.1.min',
    jqueryColor: 'libs/external/jquery/plugins/jquery.color-2.1.2.min',
    underscore: 'libs/external/underscore/underscore-1.8.3.min',
    backbone: 'libs/external/backbone/backbone-1.3.3.min',
    linkUtil: 'libs/linkUtil',
    mouseEnterLeaveAnimation: 'libs/mouseEnterLeaveAnimation',
    index: 'index',
    aboutPage: 'pages/about/aboutPage',
    resumePage: 'pages/resume/resumePage'
  },
  shim: {
    jqueryColor: ['jquery'],
    backbone: ['underscore']
  }
});

requirejs(['index']);
