// popup.js

document.getElementById("download").addEventListener("click", () => {
  const selector = document.getElementById("selector").value;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "downloadMarkdown", selector: selector },
      (response) => {
        console.log(response);
      }
    );
  });
});
