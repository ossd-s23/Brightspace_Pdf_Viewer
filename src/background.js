"use strict";

/*
This is the page for which we want to listen
*/
let targetPage = "*://*/*";

var pdfLinks = [];

/*
Rewrite the User-Agent header to "ua".
*/
function extractPDFLink(e) {
  if (e.url.includes(".pdf?")) {
    pdfLinks.push(e.url);
  }
  return {};
}

/*
Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  extractPDFLink,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"]
);

browser.browserAction.onClicked.addListener(() => {
  if (pdfLinks.length == 0) {
    alert("No PDF links found on this page");
    return;
  }

  browser.tabs.create({
    url: pdfLinks[pdfLinks.length - 1],
    active: true,
  });
});