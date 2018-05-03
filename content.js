// select element via class
const select = function(selector) {
  if (selector !== null) {
    return document.querySelector(selector)
  }
}
//hide element
const hide = function(el) {
  if (el !== null) {
    el.style.visibility = 'hidden'
  }
}

window.onload = function() {
  let currentState = localStorage.currentState
  // set localstorage

  let refineMedium
  let time
  function toggleRefinement() {
    if (
      document.location.hostname.includes('medium.') ||
      document.location.hostname.includes('blog.medium.com') ||
      document.referrer.includes('medium.')
    ) {
      refineMedium = setInterval(() => {
        time++
        const shit = [
          '.js-postShareWidget',
          '.js-elevatePostActions',
          '.postActionsBar',
          '.promoCardWrapper',
          '.js-stickyFooter',
          '.js-upgradeMembershipAction',
          '.meterThumbnail',
          '.postMeterBar',
          '.butterBar',
        ]
        const grab = shit.map(x => select(x))
        const destroy = grab.map(x => hide(x))
        if (time > 15) {
          clearInterval(refineMedium)
        }
      }, 1000)
    }
  }

  if (currentState == undefined || currentState == 'start') {
    localStorage.currentState = 'start'
    toggleRefinement()
  }
}
