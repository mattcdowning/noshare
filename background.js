// var toggle = false
// chrome.browserAction.onClicked.addListener(function(tab) {
//   toggle = !toggle
//   if (toggle) {
//     chrome.browserAction.setIcon({ path: 'on.png', tabId: tab.id })
//     chrome.tabs.executeScript(tab.id, { file: 'content.js' })
//   } else {
//     chrome.browserAction.setIcon({ path: 'off.png', tabId: tab.id })
//     chrome.tabs.executeScript(tab.id, { code: 'alert("off")' })
//     clearInterval(timer)
//   }
// })
var toggleState = false
var disableRefine = true
chrome.browserAction.onClicked.addListener(function(tab) {
  toggleState = !toggleState

  if (toggleState) {
    chrome.browserAction.setIcon({ path: 'off.png' })
    // chrome.tabs.executeScript(tab.id, { code: 'alert("off")' })
    chrome.tabs.executeScript(tab.id, { file: 'content.js' })
  } else {
    chrome.browserAction.setIcon({ path: 'on.png' })
    chrome.tabs.executeScript(tab.id, { file: 'content.js' })
  }
})
