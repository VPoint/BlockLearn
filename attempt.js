chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.active == "true"){
      chrome.tabs.executeScript({file: "destiny.js"});
      sendResponse({farewell: "goodbye"});
  }
});