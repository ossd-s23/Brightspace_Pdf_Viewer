"use strict";

var pdfLinks = new Map();

/*
 * Handler function for the webRequest.onBeforeSendHeaders event
 * Filters out requests that are not PDFs, and extracts the PDF link
 * from the request headers
 */
function extractPDFLink(e) {
  if (e.url.includes(".pdf")) {
    pdfLinks.set(e.tabId, e.url);
  }
  return {};
}

/*
 * Display the PDF embedded in the page
 */
function displayPDF() {
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then((tabs) => {
      var pdfLink = pdfLinks.get(tabs[0].id);
      if (!pdfLink) {
        return;
      }
      browser.tabs.create({
        url: pdfLink,
        active: true,
      });
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}

browser.webRequest.onBeforeSendHeaders.addListener(
  extractPDFLink,
  { urls: ["*://*/*"] },
  ["blocking", "requestHeaders"]
);

browser.browserAction.onClicked.addListener(displayPDF);
