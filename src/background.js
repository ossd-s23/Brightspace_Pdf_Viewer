"use strict";

/**
 * pdfLinks
 *
 * A map that stores the last requested PDF link for each tab. The keys in the
 * map are tab IDs, and the values are the corresponding PDF links.
 *
 * @type {Map<number, string>}
 */
var pdfLinks = new Map();

/**
 * extractPDFLink(request)
 *
 * This function is a handler for the webRequest.onBeforeSendHeaders event. It
 * filters out requests that are not PDFs, and extracts the PDF link from the
 * request headers. The PDF link and the tab ID associated with the request are
 * stored in a map for later use.
 *
 * @param {Object} request - The request headers object
 * @return {Object} - An empty object
 */
function extractPDFLink(request) {
  if (request.url.includes(".pdf")) {
    pdfLinks.set(request.tabId, request.url);
  }
  return {};
}

/**
 * displayPDF()
 *
 * This function retrieves the last requested PDF link associated with the
 * currently active tab and opens it in a new tab. If there is no PDF link
 * associated with the active tab, the function does nothing.
 *
 * @return {void}
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

// Listen for requests to PDFs
browser.webRequest.onBeforeSendHeaders.addListener(
  extractPDFLink,
  { urls: ["*://*/*"] },
  ["requestHeaders"]
);

// Fire displayPDF() when the browser action is clicked
browser.browserAction.onClicked.addListener(displayPDF);

// Remove PDF links from the map when tabs are closed
browser.tabs.onRemoved.addListener((tabId) => {
  pdfLinks.delete(tabId);
});
