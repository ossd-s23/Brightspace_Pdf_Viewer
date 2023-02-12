"use strict";

var pdfLink = null;

/*
 * Handler function for the webRequest.onBeforeSendHeaders event
 * Filters out requests that are not PDFs, and extracts the PDF link
 * from the request headers
 */
function extractPDFLink(e) {
  if (e.url.includes(".pdf")) {
    pdfLink = e.url;
  }
  return {};
}

/*
 * Display the PDF embedded in the page
 */
function displayPDF() {
  if (!pdfLink) {
    return;
  }

  browser.tabs.create({
    url: pdfLink,
    active: true,
  });
}

browser.webRequest.onBeforeSendHeaders.addListener(
  extractPDFLink,
  { urls: ["*://*/*"] },
  ["blocking", "requestHeaders"]
);

browser.browserAction.onClicked.addListener(displayPDF);
