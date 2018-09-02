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

const destroy = arr => arr.map(x => select(x)).map(x => hide(x))

window.onload = function() {
  let currentState = localStorage.currentState
  const isMedium =
    document.location.hostname.includes('medium.') ||
    document.location.hostname.includes('blog.medium.com') ||
    document.referrer.includes('medium.')
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

  const toggleRefinement = () => {
    if (isMedium) {
      let time = 0
      const refineMedium = setInterval(() => {
        time++
        if (time > 9) {
          clearInterval(refineMedium)
        }
        destroy(shit)
        const overlay = select('.overlay')
        if (overlay) {
          overlay.style.display = 'none'
        }
        const showResponses = select('.responsesStream-showOtherResponses')
        if (showResponses) {
          showResponses.click()
        }
      }, 1000)
    }
  }

  if (currentState == undefined || currentState == 'start') {
    localStorage.currentState = 'start'
    toggleRefinement()
  }
}
