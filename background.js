var toggleState = false
chrome.browserAction.onClicked.addListener(function(tab) {
  toggleState = !toggleState
  if (toggleState) {
    chrome.browserAction.setIcon({ path: 'off.png' })
    chrome.tabs.executeScript(tab.id, { file: 'off.js' })
  } else {
    chrome.browserAction.setIcon({ path: 'on.png' })
    chrome.tabs.executeScript(tab.id, { file: 'on.js' })
  }
})
