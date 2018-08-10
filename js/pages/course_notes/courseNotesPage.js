define(['backbone', 'underscore', 'courseNotesData', 'courseNoteView',
  'text!../pages/course_notes/course_notes.html', 'css!../css/pages/course_notes/course_notes.css'],
  function(Backbone, _, CourseNotesData, CourseNoteView, courseNotesTpl) {
  var CourseNotesPage = Backbone.View.extend({

    initialize: function(options) {
      this.render();
    },

    render : function() {
      var template = _.template(courseNotesTpl);
      this.$el.html(template({CourseNotesData: CourseNotesData}));

      CourseNotesData.courseNotes.forEach(function(courseNote) {
        var courseNoteView = new CourseNoteView({courseNote: courseNote});
        this.$el.find('#courseNotesContainer').append(courseNoteView.el);
      }, this);
    }
  });

  return CourseNotesPage;
});
