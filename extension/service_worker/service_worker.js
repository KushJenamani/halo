
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.greeting === "url")
        sendResponse({url: sender.tab.url});
    }
  );