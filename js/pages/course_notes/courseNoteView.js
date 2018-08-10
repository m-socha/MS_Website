define(['backbone', 'underscore', 'mouseEnterLeaveAnimation',
  'text!../pages/course_notes/course_note.html', 'css!../css/pages/course_notes/course_note.css'],
  function(Backbone, _, MouseEnterLeaveAnimation, courseNoteTpl) {
  var CourseNoteView = Backbone.View.extend({

    events: {
      'click #courseNoteContentHolder': 'openNotes'
    },

    initialize : function(options) {
      this.courseNote = options.courseNote;
      this.render();
    },

    render : function() {
      var template = _.template(courseNoteTpl);
      this.$el.html(template({courseNote: this.courseNote}));
      MouseEnterLeaveAnimation.setupAnimation(
        this.$el.find('#courseNoteContentHolder'),
        {'background-color': '#CCCCCC'},
        200,
        {'background-color': '#EEEEEE'},
        100
      );
    },

    openNotes : function() {
      window.open(this.courseNote.notesLink, "_blank");
    }
  });

  return CourseNoteView;
});
