"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

// the event handler for the click event of each h2 element
var toggle = function () {
  var h2 = this; // clicked h2 tag
  var div = h2.nextElementSibling; // h2 tag's sibling div tag

  // toggle plus and minus image in h2 elements by adding or removing a class
  if (h2.hasAttribute("class")) {
    h2.removeAttribute("class");
  } else {
    h2.setAttribute("class", "minus");
  }

  // toggle div visibility by adding or removing a class
  if (div.hasAttribute("class")) {
    div.removeAttribute("class");
  } else {
    div.setAttribute("class", "open");
  }

  const h2Elements = document.getElementsByTagName("h2"); //get all h2 elements in an array

  for (let h2Element of h2Elements) {
    if (h2Element != this) {
      //make the non-clicked h2's show plus sign and hide corresponding divs by removing their class attributes if any
      h2Element.removeAttribute("class");
      h2Element.nextElementSibling.removeAttribute("class");
    }
  }
};

window.onload = function () {
  // get the h2 tags
  var faqs = $("faqs");
  var h2Elements = faqs.getElementsByTagName("h2");

  // attach event handler for each h2 tag
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].onclick = toggle;
  }
  // set focus on first h2 tag's <a> tag
  h2Elements[0].firstChild.focus();
};
