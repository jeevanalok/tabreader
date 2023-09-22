const btn = document.getElementById("btn");

const para = document.getElementById("tabname");

btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let title = tab.title;

  para.innerText = title;
});
