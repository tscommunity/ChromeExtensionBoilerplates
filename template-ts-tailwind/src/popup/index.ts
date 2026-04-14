import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app")!;
  const link = "https://github.com/bikathi/ts-chrome-ext-starter";

  // Create the main element
  const mainElement = document.createElement("main");

  // Create the title element
  const h3Element = document.createElement("h3");
  h3Element.className = "popup-h3-title";
  h3Element.textContent = "Popup Page";

  // Create the counter element
  const divElement = document.createElement("div");
  divElement.className = "calc-area";
  const minusButton = document.createElement("button");
  minusButton.className = "calc-btns";
  minusButton.textContent = "-";
  const countLabel = document.createElement("label");
  countLabel.className = "calc-label";
  countLabel.textContent = "0";
  const addButton = document.createElement("button");
  addButton.className = "calc-btns";
  addButton.textContent = "+";
  divElement.appendChild(minusButton);
  divElement.appendChild(countLabel);
  divElement.appendChild(addButton);

  // Create the link element
  const aElement = document.createElement("a");
  aElement.href = link;
  aElement.className = "link-color";
  aElement.target = "_blank";
  aElement.textContent = "executed from starter template";

  // Append all elements to the main element
  mainElement.appendChild(h3Element);
  mainElement.appendChild(divElement);
  mainElement.appendChild(aElement);

  // Append the main element to the page
  appElement.appendChild(mainElement);

  let count = 0;

  // Get the count value from Chrome storage
  chrome.storage.sync.get(["count"], function (result) {
    count = result.count || 0;
    countLabel.textContent = `${count}`;
  });

  // Decrement the count
  minusButton.addEventListener("click", function () {
    if (count > 0) {
      count--;
      countLabel.textContent = `${count}`;
      chrome.storage.sync.set({ count });
      chrome.runtime.sendMessage({ type: "COUNT", count });
    }
  });

  // Increment the count
  addButton.addEventListener("click", function () {
    count++;
    countLabel.textContent = `${count}`;
    chrome.storage.sync.set({ count });
    chrome.runtime.sendMessage({ type: "COUNT", count });
  });
});
