var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i=0; i<x.length; i++){
    x[i].style.display= "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel , 2000);
}
var slideIndex1=0;
carousel1();
function carousel1() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i=0; i<x.length; i++){
    x[i].style.display= "none";
  }
  slideIndex1++;
  if (slideIndex1 > x.length) {slideIndex1 = 1}
  x[slideIndex1-1].style.display = "block";
  setTimeout(carousel1 , 2000);
}