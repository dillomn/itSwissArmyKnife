const words = [
  "time", "year", "people", "way", "day", "man", "thing", "woman", "life", "child", "world", "school", "state", "family", "student", "group", "country", "problem", "hand", "part", "place", "case", "week", "company", "system", "program", "question", "work", "government", "number", "night", "point", "home", "water", "room", "mother", "area", "money", "story", "fact", "month", "lot", "right", "study", "book", "eye", "job", "word", "business", "issue", "side", "kind", "head", "house", "service", "friend", "father", "power", "hour", "game", "line", "end", "member", "law", "car", "city", "community", "name", "president", "team", "minute", "idea", "kid", "body", "information", "back", "parent", "face", "others", "level", "office", "door", "health", "person", "art", "war", "history", "party", "result", "change", "morning", "reason", "research", "girl", "guy", "moment", "air", "teacher", "force", "education"
];

const cmdCheatsheet = [
  { cmd: "ipconfig /all", desc: "Show full IP configuration" },
  { cmd: "ipconfig /flushdns", desc: "Clear DNS cache" },
  { cmd: "ping <host> -t", desc: "Ping continuously" },
  { cmd: "tracert <host>", desc: "Trace route to host" },
  { cmd: "nslookup <domain>", desc: "Query DNS records" },
  { cmd: "netstat -an", desc: "Show all open ports/connections" },
  { cmd: "sfc /scannow", desc: "Scan and fix system files" },
  { cmd: "chkdsk /f", desc: "Check disk for errors" },
  { cmd: "gpupdate /force", desc: "Force Group Policy update" },
  { cmd: "systeminfo", desc: "Show OS and hardware details" },
  { cmd: "wmic product get name", desc: "List installed software" },
  { cmd: "shutdown /r /t 0", desc: "Restart immediately" },
  { cmd: "whoami", desc: "Show current user" },
  { cmd: "net user /domain", desc: "List domain users" },
  { cmd: "tasklist", desc: "List running processes" },
  { cmd: "taskkill /IM <name> /F", desc: "Force kill a process" }
];

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

const homeView = document.getElementById("home");
const navBar = document.getElementById("navBar");
const backBtn = document.getElementById("backBtn");
const navTitle = document.getElementById("navTitle");

// Handle Menu Tile Clicks
document.querySelectorAll(".menu-tile").forEach(btn => {
  btn.onclick = () => {
    // Hide Home
    homeView.classList.add("hidden");
    
    // Show Nav Bar
    navBar.classList.remove("hidden");
    navTitle.textContent = btn.dataset.title;
    
    // Show Widget
    document.querySelectorAll(".widget").forEach(w => w.classList.add("hidden"));
    document.getElementById(btn.dataset.open).classList.remove("hidden");
  };
});

// Handle Back Button
backBtn.onclick = () => {
  // Hide Widgets and Nav
  document.querySelectorAll(".widget").forEach(w => w.classList.add("hidden"));
  navBar.classList.add("hidden");
  
  // Show Home
  homeView.classList.remove("hidden");
};

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

  if (chars.length === 0) {
    pwResult.value = "";
    pwStrength.style.width = "0%";
    return;
  }

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
  
  // Add 2 digit number to satisfy complexity reqs
  const num = Math.floor(Math.random() * 90) + 10; // 10-99
  
  ppResult.value = result.join(ppSep.value) + ppSep.value + num;
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
  tile.dataset.letter = letter; // Add data attribute for easy lookup

  tile.innerHTML = `
    <div class="nato-letter">${letter}</div>
    <div class="nato-word">${word.toLowerCase()}</div>
  `;

  tile.onclick = () => activateNatoTile(letter);
  natoGrid.appendChild(tile);
});

function activateNatoTile(letter) {
  // Remove active class from all tiles
  document.querySelectorAll(".nato-tile").forEach(t => t.classList.remove("active"));
  
  // Add active class to target tile
  const tile = document.querySelector(`.nato-tile[data-letter="${letter}"]`);
  if (tile) {
    tile.classList.add("active");
  }
}

// Keyboard listener for NATO widget
document.addEventListener("keydown", (e) => {
  // Only activate if the NATO widget is visible
  if (document.getElementById("natoWidget").classList.contains("hidden")) return;

  const key = e.key.toUpperCase();
  if (/[A-Z]/.test(key) && key.length === 1) {
    activateNatoTile(key);
    checkNatoEasterEgg(key);
  }
});

// NATO Easter Egg: A-Z unlocks RGB Mode (per key)
let natoSequence = 0; 
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let rgbUnlocked = false;

function checkNatoEasterEgg(key) {
  if (rgbUnlocked) return;
  
  const expected = alphabet[natoSequence];
  if (key === expected) {
    natoSequence++;
    if (natoSequence === 26) {
      rgbUnlocked = true;
      // Flash 'Z' immediately to confirm
      const zTile = document.querySelector(`.nato-tile[data-letter="Z"]`);
      if (zTile) zTile.classList.add("rgb-unlocked");
    }
  } else {
    natoSequence = 0;
    if (key === 'A') natoSequence = 1;
  }
}

function activateNatoTile(letter) {
  // Remove active class from all tiles
  document.querySelectorAll(".nato-tile").forEach(t => {
    t.classList.remove("active");
    // Don't remove rgb-unlocked class if it persists, 
    // but here we want it only on ACTIVE state
    t.classList.remove("rgb-unlocked"); 
  });
  
  // Add active class to target tile
  const tile = document.querySelector(`.nato-tile[data-letter="${letter}"]`);
  if (tile) {
    tile.classList.add("active");
    if (rgbUnlocked) {
      tile.classList.add("rgb-unlocked");
    }
  }
}

// Global Easter Eggs (QWERTY & Spam)
let keyBuffer = "";
let spamCount = 0;
let spamTimer = null;

document.addEventListener("keydown", (e) => {
  // QWERTY Check
  keyBuffer += e.key.toLowerCase();
  if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);
  
  if (keyBuffer === "qwertyuiop") {
    toggleCrtMode();
  }
  
  // Spam Check (BSOD)
  // Only count simple keys to avoid triggering on shortcuts
  if (e.key.length === 1) {
    spamCount++;
    if (!spamTimer) {
      spamTimer = setTimeout(() => {
        spamCount = 0;
        spamTimer = null;
      }, 1000);
    }
    
    if (spamCount > 15) {
      triggerBsod();
      spamCount = 0; // Reset to avoid double trigger
    }
  }
});

function toggleCrtMode() {
  const overlay = document.getElementById("crtOverlay");
  if (overlay) overlay.classList.toggle("on");
}

function triggerBsod() {
  const bsod = document.getElementById("bsod");
  if (bsod) {
    bsod.style.display = "block";
    setTimeout(() => {
      bsod.style.display = "none";
    }, 3000);
  }
}

// CMD Cheatsheet
const cmdList = document.getElementById("cmdList");
cmdCheatsheet.forEach(item => {
  const div = document.createElement("div");
  div.className = "cmd-item";
  div.innerHTML = `<div class="cmd-command">${item.cmd}</div><div class="cmd-desc">${item.desc}</div>`;
  cmdList.appendChild(div);
});

// Persistent Scratchpad Logic
const scratchPad = document.getElementById("scratchPad");
const clearScratch = document.getElementById("clearScratch");

// Load saved notes on startup
scratchPad.value = localStorage.getItem("isak_scratchpad") || "";

// Save on every keystroke
scratchPad.oninput = () => {
  localStorage.setItem("isak_scratchpad", scratchPad.value);
};

// Clear button
clearScratch.onclick = () => {
  // Simple confirmation to prevent accidental deletion
  if (confirm("Are you sure you want to clear your notes?")) {
    scratchPad.value = "";
    localStorage.removeItem("isak_scratchpad");
  }
};

// Incognito Bookmarks Logic
const openCurrentIncognitoBtn = document.getElementById("openCurrentIncognito");
const newBookmarkName = document.getElementById("newBookmarkName");
const newBookmarkUrl = document.getElementById("newBookmarkUrl");
const addBookmarkBtn = document.getElementById("addBookmark");
const bookmarkList = document.getElementById("bookmarkList");

// Load bookmarks
let incognitoBookmarks = JSON.parse(localStorage.getItem("isak_bookmarks") || "[]");

function renderBookmarks() {
  bookmarkList.innerHTML = "";
  if (incognitoBookmarks.length === 0) {
    bookmarkList.innerHTML = "<div class='cmd-item' style='text-align:center; padding:10px; color:#555;'>No shortcuts saved</div>";
    return;
  }

  incognitoBookmarks.forEach((bm, index) => {
    const div = document.createElement("div");
    div.className = "bookmark-item";
    
    div.innerHTML = `
      <div class="bookmark-info">
        <div class="bookmark-name">${bm.name}</div>
        <div class="bookmark-url">${bm.url}</div>
      </div>
      <div class="bookmark-actions">
        <button class="launch-btn">🚀</button>
        <button class="delete-btn">✖</button>
      </div>
    `;
    
    // Handlers
    div.querySelector(".launch-btn").onclick = () => {
      chrome.windows.create({ url: bm.url, incognito: true });
    };
    
    div.querySelector(".delete-btn").onclick = () => {
      if (confirm("Delete this shortcut?")) {
        incognitoBookmarks.splice(index, 1);
        saveBookmarks();
        renderBookmarks();
      }
    };
    
    bookmarkList.appendChild(div);
  });
}

function saveBookmarks() {
  localStorage.setItem("isak_bookmarks", JSON.stringify(incognitoBookmarks));
}

addBookmarkBtn.onclick = () => {
  const name = newBookmarkName.value.trim();
  let url = newBookmarkUrl.value.trim();
  
  if (!name || !url) return;
  
  if (!url.startsWith("http")) url = "https://" + url;
  
  incognitoBookmarks.push({ name, url });
  saveBookmarks();
  renderBookmarks();
  
  newBookmarkName.value = "";
  newBookmarkUrl.value = "";
};

openCurrentIncognitoBtn.onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs[0]) {
      chrome.windows.create({ url: tabs[0].url, incognito: true });
    }
  });
};

renderBookmarks(); // Init

// Port Sniffer (Fetch-based)
const portResult = document.getElementById("portResult");
const checkPortsBtn = document.getElementById("checkPorts");
const portHost = document.getElementById("portHost");

checkPortsBtn.onclick = async () => {
  const host = portHost.value.trim();
  if (!host) return;
  
  portResult.value = "Checking common ports... (This is browser-limited)\n";
  const ports = [80, 443, 8080, 8443]; // Browser safe-ish ports
  
  for (const port of ports) {
    try {
      // Abuse fetch to detect connectivity
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500); // 1.5s timeout
      
      await fetch(`http://${host}:${port}`, { 
        mode: 'no-cors', 
        signal: controller.signal 
      });
      
      clearTimeout(timeoutId);
      portResult.value += `✅ Port ${port} Open (Web Reachable)\n`;
    } catch (e) {
      if (e.name === 'AbortError') {
        portResult.value += `❌ Port ${port} Timeout/Closed\n`;
      } else {
         // Network error usually means connection refused or closed, but sometimes mixed content block
         // Since we are likely in a popup, mixed content might block local IP checks if not https
         portResult.value += `❓ Port ${port} Error (Might be Open but blocked by CORS/Mixed Content)\n`;
      }
    }
  }
  portResult.value += "\nNote: Real port scanning (TCP/UDP) is not possible in a browser extension. Use 'nmap' for accurate results.";
};
