var prompt = document.getElementById('prompt_t');

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }

  var distanceToTop = window.pageYOffset;
  var opacity = 1;
  
  if (distanceToTop > 100 && distanceToTop < 200) {
    opacity = 1 - (distanceToTop/200);
  }

  if (distanceToTop >= 200){
    opacity = 0;
  }
  
  if (opacity >= 0) {
    element.style.opacity = opacity;
  }

}

function scrollHandler() {
  fadeOutOnScroll(prompt);
}

window.addEventListener('scroll', scrollHandler);