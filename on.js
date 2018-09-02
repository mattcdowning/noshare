localStorage.currentState = 'start'
function toggleRefinement() {
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
      const showResponses = select('.responsesStream-showOtherResponses')
      if (showResponses) {
        showResponses.click()
      }
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
toggleRefinement()
