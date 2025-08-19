import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const link = "https://github.com/bikathi/ts-chrome-ext-starter";
  const appElement =
    document.querySelector("section") ?? document.createElement("section");
  appElement.className = "main-section";

  const spanElement = document.createElement("span");
  appElement.appendChild(spanElement);

  // Function to get the current time
  const getTime = () => {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    return `${hour}:${minute}:${second}`;
  };

  // Create a function to update the time
  const updateTime = () => {
    const timeElement =
      appElement.querySelector("h1") ??
      appElement.appendChild(document.createElement("h1"));
    timeElement.className = "time-text";
    if (timeElement) {
      timeElement.textContent = getTime();
    }
  };

  // Initialize the time
  updateTime();

  // Create an interval to update the time every second
  const intervalId = setInterval(updateTime, 1000);

  // Clean up the interval when the page unloads
  window.addEventListener("beforeunload", () => {
    clearInterval(intervalId);
  });

  // Create the link element
  const aElement =
    appElement.querySelector("a") ??
    appElement.appendChild(document.createElement("a"));
  aElement.className = "link-style";
  aElement.href = link;
  aElement.target = "_blank";
  aElement.textContent = "executed from starter template";

  // Append the link element to the section
  appElement.appendChild(aElement);

  document.getElementById("app")?.appendChild(appElement);
});
