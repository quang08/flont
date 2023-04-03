var rotate180 = document.getElementsByClassName("rotate180");
var filterDesicison = [true, true, true, true];

function filterAction(id, buttonId, listID) {
  var decision = filterDesicison[id]; // true or false
  var filterContent = document.getElementById(listID);
  var filter = document.getElementById(buttonId); // button
  if (decision) { // if true
    filterContent.style.cssText = `
        display: block;`;
    filter.style.cssText = `
        -webkit-transform: rotateX(180deg); 
        transform: rotateZ(180deg);
        transition: 0.5s;`;
  } else {
    filterContent.style.cssText = `
        display: none;`;
    filter.style.cssText = `
        -webkit-transform: rotateX(0deg); 
        transform: rotateZ(0deg);
        transition: 0.5s;`;
  }
  filterDesicison[id] = !decision;
}
