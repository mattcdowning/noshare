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

// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.storage.sync.get('state', function(data) {
//     alert(data)
//     if (data.state === 'on') {
//       chrome.storage.sync.set({ state: 'off' })
//       //do something, removing the script or whatever
//     } else {
//       chrome.storage.sync.set({ state: 'on' })
//       //inject your script
//       chrome.tabs.executeScript(tab.id, { file: 'content.js' })
//     }
//   })
// })
