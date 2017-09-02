define(['jquery', 'jqueryColor', 'aboutPage', 'workTermsPage',
  'projectsPage', 'resumePage', 'mouseEnterLeaveAnimation'],
  function($, jqueryColor, AboutPage, WorkTermsPage,
    ProjectsPage, ResumePage, MouseEnterLeaveAnimation) {

  $(document).ready(function() {
    setupHashChangeListener();
    setupHeaderPageSelection();
    handleInitialHash();
    setupHeaderTitleClickListener();
  });

  function setupHashChangeListener() {
    $(window).on('hashchange', function() {
      var hash = window.location.hash;
      if (hash) {
        loadContentPage(hash);
      }
    });
  }

  function loadContentPage(pageHash) {
    var contentPage;
    var selectorId;
    switch (pageHash) {
      case "#about":
        contentPage = new AboutPage();
        selectorId = 'headerPageAboutSelector';
        break;
      case "#projects":
        contentPage = new ProjectsPage();
        selectorId = 'headerPageProjectsSelector';
        break;
      case "#work_terms":
        contentPage = new WorkTermsPage();
        selectorId = 'headerPageWorkTermsSelector';
        break;
      case "#resume":
        contentPage = new ResumePage();
        selectorId = 'headerPageResumeSelector';
        break;
    }

    if (contentPage && selectorId) {
      $('#pageHolder').html(contentPage.el);

      $('#headerSelectorHolder .headerPageSelector').removeClass('selected');
      $('#' + selectorId).addClass('selected');
    }

    setupHeaderPageAnimation();
  }

  function setupHeaderPageAnimation() {
    $('#headerSelectorHolder .headerPageSelector').unbind('mouseenter');
    $('#headerSelectorHolder .headerPageSelector').unbind('mouseleave');

    $('#headerSelectorHolder .headerPageSelector').not('.selected').css(
      {'background-color': '#F0F0F0'}
    );
    $('#headerSelectorHolder .headerPageSelector.selected').css(
      {'background-color': '#E0E0E0'}
    );

    MouseEnterLeaveAnimation.setupAnimation(
      $('#headerSelectorHolder .headerPageSelector').not('.selected'),
      {'background-color': '#E0E0E0'},
      200,
      {'background-color': '#F0F0F0'},
      100
    );
  }

  function setupHeaderPageSelection() {
    $('#headerSelectorHolder .headerPageSelector').click(function() {
      switch ($(this).attr('id')) {
        case 'headerPageAboutSelector':
          window.location.hash = "#about";
          break;
        case 'headerPageProjectsSelector':
          window.location.hash = "#projects";
          break;
        case 'headerPageWorkTermsSelector':
          window.location.hash = "#work_terms";
          break;
        case 'headerPageResumeSelector':
          window.location.hash = "#resume";
          break;
      }
    });
  }

  function handleInitialHash() {
    var hash = window.location.hash;
    if (hash) {
      loadContentPage(hash);
    } else {
      window.location.hash = "#about";
    }
  }

  function setupHeaderTitleClickListener() {
    $('#headerTitle').click(function() {
      window.location.hash = "#about";
    });
  }
});
