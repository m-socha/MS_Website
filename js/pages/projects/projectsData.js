define(["linkUtil"], function(LinkUtil) {
  
  var projects = [
    {
      name: "Image Filters",
      date: "Apr - May 2016",
      skillTags: ["Android", "Java", "RenderScript"],
      image: LinkUtil.imgLink("image_filters_icon.png"),
      description: "<p>Image Filters is an Android application that lets users apply various filters in succession on their images. Users can customize the order and weight of the filters, resulting in many interesting effects.</p> <p>The application itself is primarily written in Java. Image filters for the app are written using the RenderScript library, which supports a C-like language for implementing custom filter kernels.</p> <p><a href='https://play.google.com/store/apps/details?id=com.imagefilterer.michael.imageblurrer' target='_blank'><img src='" + LinkUtil.imgLink("google_play_icon.png") + "'/><a/></p>"
    },
    {
      name: "Lacs Compiler",
      date: "Sep - Nov 2015",
      skillTags: ["Scala", "MIPS"],
      image: LinkUtil.imgLink("lacs_project_icon.png"),
      description: "<p>As part of an academic program, I designed and developed a compiler for Lacs, which is a subset of Scala. Lacs supports all of the basic features of Scala, such as functions, arithmetic, loops and conditionals, as well as some more advanced features, including closures and nested functions.</p> <p> The compiler itself is written in Scala. A Lacs program is passed in as a string, which is tokenized and parsed. After this, context-sensitive analysis (e.g. type checking, name resolution) is performed, and the parse tree is traversed and translated into MIPS machine code.</p>"
    },
    {
      name: "KIREA Admin Portal",
      date: "Aug 2014 – Feb 2017",
      skillTags: ["PHP", "JavaScript", "jQuery", "HTML", "CSS"],
      image: LinkUtil.imgLink("kirea_project_icon.png"),
      description: "<p>KIREA is a Canadian charity that focuses on providing aid and education to impoverished areas of Africa and Asia. Most of KIREA's support comes from individual donations, leading to the need for a system to manage these contributions.</p> <p>As a volunteer, I developed and maintained a backend system and a frontend web UI for the charity's administration to better organize donations and automate certain tasks. The system's features include:</p> <p><ul><li>Ability to add, update and remove donors and associated donation information</li> <li>Automated receipt generation and emailing</li> <li>Data analytics for donation trends and donor history</li></ul></p>"
    },
    {
      name: "UWAQ Aquaponics Sensor System",
      date: "Sep 2014 - Feb 2015",
      skillTags: ["PHP", "Arduino", "JavaScript", "jQuery", "HTML", "CSS"],
      image: LinkUtil.imgLink("uwaq_project_icon.png"),
      description: "<p>The University of Waterloo Aquaponics Design Team (UWAQ) is a student design team that focuses designing, building and maintaining which are farming units that are self-sustaining by automatically cycling the carbon and nitrogen cycles.</p> <p>The performance of aquaponics systems is dependent on various environmental factors, such as water pH and oxygen concentration. To measure these variables, UWAQ's aquaponics system was connected to several sensors that relayed their data to an Arduino microcontroller. The microcontroller then sent these measurements through a serial connection to a computer, which uploaded them to a server for storage and analysis.</p> <p>My role in the project was to construct a PHP and MySQL backend to store the measurements. Additionally, I implemented measurement analysis scripts which would notify team members when any measurements were out of their desired range, and a web UI to help visualize measurement data.</p>"
    }
  ];

  return {projects: projects};
});
