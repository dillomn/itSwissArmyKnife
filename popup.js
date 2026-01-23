const words = ["alpha","bravo","charlie","delta","server","packet","router"];
let vendors = [];
const natoAlphabet = [
  ["A","Alpha"], ["B","Bravo"], ["C","Charlie"], ["D","Delta"], ["E","Echo"],
  ["F","Foxtrot"], ["G","Golf"], ["H","Hotel"], ["I","India"], ["J","Juliett"],
  ["K","Kilo"], ["L","Lima"], ["M","Mike"], ["N","November"], ["O","Oscar"],
  ["P","Papa"], ["Q","Quebec"], ["R","Romeo"], ["S","Sierra"], ["T","Tango"],
  ["U","Uniform"], ["V","Victor"], ["W","Whiskey"], ["X","X-ray"],
  ["Y","Yankee"], ["Z","Zulu"]
];


fetch("mac_vendors.json")
  .then(r => r.json())
  .then(data => vendors = data);

document.querySelectorAll("button[data-open]").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".widget").forEach(w => w.classList.add("hidden"));
    document.getElementById(btn.dataset.open).classList.remove("hidden");
  };
});

function passwordStrength(pw) {
  let score = 0;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[a-z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

genPassword.onclick = () => {
  let chars = "";
  if (pwUpper.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (pwLower.checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (pwNumbers.checked) chars += "0123456789";
  if (pwSymbols.checked) chars += "!@#$%^&*()";

  let pw = "";
  for (let i = 0; i < pwLength.value; i++)
    pw += chars[Math.floor(Math.random() * chars.length)];

  pwResult.value = pw;

  const strength = passwordStrength(pw);
  pwStrength.style.width = `${strength * 20}%`;
  pwStrength.style.background = strength >= 4 ? "lime" : strength >= 3 ? "orange" : "red";
};

copyPassword.onclick = () => navigator.clipboard.writeText(pwResult.value);
copyPassphrase.onclick = () => navigator.clipboard.writeText(ppResult.value);

genPassphrase.onclick = () => {
  let result = [];
  for (let i = 0; i < ppWords.value; i++) {
    let w = words[Math.floor(Math.random() * words.length)];
    if (ppCase.value === "upper") w = w.toUpperCase();
    if (ppCase.value === "title") w = w[0].toUpperCase() + w.slice(1);
    result.push(w);
  }
  ppResult.value = result.join(ppSep.value);
};

lookupMac.onclick = () => {
  let clean = macInput.value.toUpperCase().replace(/[^A-F0-9]/g, "");
  let prefix = clean.slice(0, 6);
  let match = vendors.find(v => v.macPrefix.replace(/:/g, "") === prefix);
  macResult.value = match ? match.vendorName : "Unknown vendor";
};

const natoGrid = document.getElementById("natoGrid");

natoAlphabet.forEach(([letter, word]) => {
  const tile = document.createElement("div");
  tile.className = "nato-tile";

  tile.innerHTML = `
    <div class="nato-letter">${letter}</div>
    <div class="nato-word">${word.toLowerCase()}</div>
  `;

  natoGrid.appendChild(tile);
});
