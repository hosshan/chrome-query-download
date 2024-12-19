// content.js

function downloadMarkdown(selector) {
  const elements = document.querySelectorAll(selector);
  let markdownContent = "";

  console.log("elementds size: " + elements.length);

  elements.forEach((element) => {
    console.log(element.textContent.trim());
    markdownContent += `- ${element.textContent.trim()}\n`;
  });

  // Create a Blob from the Markdown content
  const blob = new Blob([markdownContent], { type: "text/markdown" });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a download link
  const downLoadLink = document.createElement("a");
  downLoadLink.href = url;
  downLoadLink.download = "content.md";
  downLoadLink.click();

  // Revoke the URL to release memory
  URL.revokeObjectURL(url);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "downloadMarkdown") {
    downloadMarkdown(request.selector);
    sendResponse({ status: "success" });
  }
});
