const words = [
  "alpha","bravo","charlie","delta","echo","foxtrot",
  "tiger","coffee","server","packet","kernel","router"
];

fetch("mac_vendors.json")
  .then(r => r.json())
  .then(vendors => window.macVendors = vendors);

document.getElementById("genPassword").onclick = () => {
  const length = +pwLength.value;
  let chars = "";
  if (pwUpper.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (pwLower.checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (pwNumbers.checked) chars += "0123456789";
  if (pwSymbols.checked) chars += "!@#$%^&*()_+=-{}[]<>?";

  let pw = "";
  for (let i = 0; i < length; i++)
    pw += chars[Math.floor(Math.random() * chars.length)];

  pwResult.value = pw;
};

document.getElementById("genPassphrase").onclick = () => {
  const count = +ppWords.value;
  const sep = ppSep.value;
  const casing = ppCase.value;

  let result = [];
  for (let i = 0; i < count; i++) {
    let w = words[Math.floor(Math.random() * words.length)];
    if (casing === "upper") w = w.toUpperCase();
    if (casing === "title") w = w[0].toUpperCase() + w.slice(1);
    result.push(w);
  }
  ppResult.value = result.join(sep);
};

document.getElementById("lookupMac").onclick = () => {
  let mac = macInput.value
    .toUpperCase()
    .replace(/[^A-F0-9]/g, "")
    .slice(0, 6);

  macResult.value =
    window.macVendors[mac] || "Unknown vendor";
};
