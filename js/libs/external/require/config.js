requirejs.config({
  baseUrl: 'js',
  paths: {
    text: 'libs/external/require/plugins/textJS',
    css: 'libs/external/require/plugins/css.min',
    jquery: 'libs/external/jquery/jquery-3.2.1.min',
    underscore: 'libs/external/underscore/underscore-1.8.3.min',
    backbone: 'libs/external/backbone/backbone-1.3.3.min',
    index: 'index',
    aboutPage: 'pages/about/aboutPage'
  },
  shim: {
    backbone: ['underscore']
  }
});

requirejs(['index']);
