//select element via class
function select(selector) {
  return document.querySelector(selector)
}
//hide element
function hide(el) {
  el.style.visibility = 'hidden'
}

var currentState = localStorage.currentState
// set localstorage

if (currentState == undefined || currentState == 'start') {
  localStorage.currentState = 'start'
  toggleRefinement()
} else {
  localStorage.currentState = 'stop'
  toggleRefinement()
  clearTimeout(refineMedium)
}

//Medium
// Share bar
function toggleRefinement() {
  var refineMedium
  if (
    document.location.hostname.includes('medium.') ||
    document.location.hostname.includes('blog.medium.com') ||
    document.referrer.includes('medium.')
  ) {
    refineMedium = setInterval(() => {
      const medPostShareWidget = select('.js-postShareWidget')
      const medRecBar = select('.postActionsBar')
      const medAuthorCard = select('.promoCardWrapper')
      const medUpdateBar = select('.js-stickyFooter')

      if (medPostShareWidget) {
        hide(medPostShareWidget)
      }
      // Recommend/Comment bar
      if (medRecBar) {
        hide(medRecBar)
      }
      // Follow Author card
      if (medAuthorCard) {
        hide(medAuthorCard)
      }
      // Never miss a story bar
      if (medUpdateBar) {
        hide(medUpdateBar)
      }
    }, 1000)
  }
}
