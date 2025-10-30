const text = document.getElementById("aiThought");
const lines = text.innerHTML.split("<br>");
let index = 0;

function revealAIWisdom() {
  if (index < lines.length) {
    text.innerHTML = lines.map((line, i) => (i <= index ? line : "")).join("<br>");
    index++;
    setTimeout(revealAIWisdom, 1300);
  } else {
    // gentle pulse of color to simulate digital "breathing"
    setInterval(() => {
      text.style.color = text.style.color === "#ddd" ? "#a9e2ff" : "#ddd";
    }, 4000);
  }
}
revealAIWisdom();
