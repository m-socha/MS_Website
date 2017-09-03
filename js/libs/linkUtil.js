define([], function() {
  
  var imgLink = function(img) {
    return "../../supportingFiles/images/" + img;
  }

  var docLink = function(doc) {
    return "../../supportingFiles/docs/" + doc;
  }

  var projectLink = function(project) {
    return "../../projects/" + project;
  }

  return {
    imgLink: imgLink,
    docLink: docLink,
    projectLink: projectLink
  };
});
