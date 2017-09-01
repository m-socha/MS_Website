define(['jquery', 'jqueryColor', 'aboutPage', 'workTermsPage',
  'projectsPage', 'resumePage', 'mouseEnterLeaveAnimation'],
  function($, jqueryColor, AboutPage, WorkTermsPage,
    ProjectsPage, ResumePage, MouseEnterLeaveAnimation) {

  var PagesEnum = {
    about: 0,
    projects: 1,
    workTerms: 2,
    resume: 3
  };

  $(document).ready(function() {
    setupHeaderPageSelection();
    loadContentPage(PagesEnum.about);
  });

  function setupHeaderPageSelection() {
    $('#headerSelectorHolder .headerPageSelector').click(function() {
      switch ($(this).attr('id')) {
        case 'headerPageAboutSelector':
          loadContentPage(PagesEnum.about);
          break;
        case 'headerPageProjectsSelector':
          loadContentPage(PagesEnum.projects);
          break;
        case 'headerPageWorkTermsSelector':
          loadContentPage(PagesEnum.workTerms);
          break;
        case 'headerPageResumeSelector':
          loadContentPage(PagesEnum.resume);
          break;
      }
    });
  }

  function loadContentPage(page) {
    var contentPage;
    var selectorId;
    switch (page) {
      case PagesEnum.about:
        contentPage = new AboutPage();
        selectorId = 'headerPageAboutSelector';
        break;
      case PagesEnum.projects:
        contentPage = new ProjectsPage();
        selectorId = 'headerPageProjectsSelector';
        break;
      case PagesEnum.workTerms:
        contentPage = new WorkTermsPage();
        selectorId = 'headerPageWorkTermsSelector';
        break;
      case PagesEnum.resume:
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
    MouseEnterLeaveAnimation.setupAnimation(
      $('#headerSelectorHolder .headerPageSelector').not('.selected'),
      {'background-color': '#E0E0E0'},
      200,
      {'background-color': '#F0F0F0'},
      100
    );
  }
});
