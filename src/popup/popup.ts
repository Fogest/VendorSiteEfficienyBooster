document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("actionButton");
  if (button) {
    button.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab.id) {
          chrome.tabs.sendMessage(
            activeTab.id,
            { action: "modifyPage" },
            (response) => {
              console.log("Page modification response:", response);
            }
          );
        }
      });
    });
  }
});
