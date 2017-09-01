define(['jquery', 'aboutPage', 'projectsPage', 'resumePage'],
  function($, AboutPage, ProjectsPage, ResumePage) {

  var PagesEnum = {
    about: 0,
    workTerms: 1,
    projects: 2,
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
        case 'heaerPageWorkTermsSelector':
          loadContentPage(PagesEnum.workTerms);
          break;
        case 'headerPageProjectsSelector':
          loadContentPage(PagesEnum.projects);
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
      case PagesEnum.workTerms:
        contentPage = new AboutPage();
        selectorId = 'headerPageAboutSelector';
        break;
      case PagesEnum.projects:
        contentPage = new ProjectsPage();
        selectorId = 'headerPageProjectsSelector';
        break;
      case PagesEnum.resume:
        contentPage = new ResumePage();
        selectorId = 'headerPageResumeSelector';
        break;
    }

    if (contentPage && selectorId) {
      $('#pageHolder').html(contentPage.el);

      $('#headerSelectionHolder headerPageSelector').removeClass('selected');
      $('#' + selectorId).addClass('selected');
    }

  }

});
