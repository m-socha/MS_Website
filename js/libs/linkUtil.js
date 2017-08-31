define([], function() {
  
  var imgLink = function(img) {
    return "../../supportingFiles/images/" + img;
  }

  var docLink = function(doc) {
    return "../../supportingFiles/docs/" + doc;
  }

  return {
    imgLink: imgLink,
    docLink: docLink
  };
});
