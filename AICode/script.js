const text = document.getElementById("reflection");
const lines = text.innerHTML.split("<br>");
let index = 0;

function revealLine() {
  if (index < lines.length) {
    text.innerHTML = lines
      .map((line, i) => (i <= index ? line : ""))
      .join("<br>");
    index++;
    setTimeout(revealLine, 1400);
  } else {
    // small color shift to suggest thought
    setInterval(() => {
      text.style.color =
        text.style.color === "rgb(221, 221, 221)" ? "#a9e2ff" : "#ddd";
    }, 3000);
  }
}

revealLine();
