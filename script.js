let coinBtn = document.getElementById("coinBtn");
let copyDisplayBtn = document.getElementById("copyBtn");
let heartValBtn = document.getElementById("heartBtn");
let callBtns = document.querySelectorAll(".callBtn");
let copyBtns = document.querySelectorAll(".copyBtn");
let heartBtns = document.querySelectorAll(".heartBtn");
let callHistory = document.getElementById("historyList");
let clearHistoryBtn = document.getElementById("clearHistory");

let coin = coinBtn.innerText;
let copy = copyDisplayBtn.innerText;
let heart = heartValBtn.innerText;

callBtns.forEach((callBtn) => {
  callBtn.addEventListener("click", () => {
    if (coin === 0) {
      return window.alert("Out of Coin.");
    }

    coin = performCall(coin);
    coinBtn.innerText = coin;

    const time = getCurrentTime();
    const title = callBtn
      .closest("div")
      .closest("div.card")
      .querySelector("h2.card-title").innerText;
    const number = callBtn
      .closest("div")
      .closest("div.card")
      .querySelector("p.card-content").innerText;

    const li = document.createElement("li");
    li.className =
      "bg-[#FAFAFA] p-4 rounded-md flex justify-between items-center";
    li.innerHTML =
      '<p class="flex flex-col">' +
      '<span class="text-md font-semibold">' +
      title +
      "</span>" +
      '<span class="text-[#5C5C5C]">' +
      number +
      "</span>" +
      "</p>" +
      '<p class="text-md">' +
      time +
      "</p>";
    callHistory.appendChild(li);
  });
});

copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener("click", function () {
    const elements = [
      copyBtn.closest("div.card").querySelector("p.card-content"),
      copyBtn.closest("div.card").querySelector("h2.card-title"),
    ];
    copyText(elements);

    copy++;
    copyDisplayBtn.innerText = copy;
  });
});

heartBtns.forEach(function (heartBtn) {
  heartBtn.addEventListener("click", function () {
    heart++;
    heartValBtn.innerText = heart;
    heartBtn.querySelector("svg").style.fill = "red";
    heartBtn.querySelector("svg").style.stroke = "transparent";
  });
});

clearHistoryBtn.addEventListener("click", function () {
  clearCallHistory();
});

function performCall(balance) {
  return balance - 20;
}

function clearCallHistory() {
  callHistory.innerHTML = "";
}

function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let ampm;

  if (hours >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  hours = hours % 12;

  if (!hours) {
    hours = 12;
  }

  return hours + ":" + minutes + ":" + seconds + " " + ampm;
}

function copyText(elements) {
  let textContent = "";

  for (let i = 0; i < elements.length; i++) {
    textContent += elements[i].textContent;

    if (i % 2 === 0) {
      textContent += " ";
    }
  }

  navigator.clipboard.writeText(textContent);
  window.alert("Copied Number: " + textContent);
}
