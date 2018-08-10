define([], function() {

  var courseNotes = [
    {
      courseName: 'Genetics',
      courseCode: 'BIOL 239',
      termTaken: 'Spring 2018',
      summary: 'Introductory genetics course, with topics including Mendelian genetics, gene structure, gene expression,'
        + ' population genetics, and genetic analysis.',
      notesLink: 'https://github.com/m-socha/BIOL-239-Notes/raw/master/notes.pdf'
    },
    {
      courseName: 'Computer Networks',
      courseCode: 'ECE 358',
      termTaken: 'Spring 2018',
      summary: 'Provides a top-down layer-by-layer overview of modern computer networks.',
      notesLink: 'https://github.com/m-socha/ECE-358-Notes/raw/master/notes.pdf'
    },
    {
      courseName: 'Distributed Systems',
      courseCode: 'ECE 454',
      termTaken: 'Spring 2018',
      summary: 'Course on the fundamental concepts of distributed computing, as well as some common technologies such as Thrift, Hadoop, and ZooKeeper.',
      notesLink: 'https://github.com/m-socha/ECE-454-Notes/raw/master/notes.pdf'
    },
    {
      courseName: 'Cooperative and Adaptive Algorithms',
      courseCode: 'ECE 457A',
      termTaken: 'Spring 2018',
      summary: 'Introductory AI course with a focus on search algorithms.',
      notesLink: 'https://github.com/m-socha/ECE-457A-Notes/raw/master/notes.pdf'
    },
    {
      courseName: 'Software Requirements Specification and Analysis',
      courseCode: 'SE 463',
      termTaken: 'Spring 2018',
      summary: 'Course about gathering, representing, and analyzing project requirements and specifications.',
      notesLink: 'https://github.com/m-socha/SE-463-Notes/raw/master/notes.pdf'
    }
  ];

  return {courseNotes: courseNotes};
});
