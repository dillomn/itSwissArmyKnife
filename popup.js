const words = ["that", "this", "with", "from", "your", "have", "more", "will", "home", "about", "page", "search", "free", "other", "information", "time", "they", "site", "what", "which", "their", "news", "there", "only", "when", "contact", "here", "business", "also", "help", "view", "online", "first", "been", "would", "were", "services", "some", "these", "click", "like", "service", "than", "find", "price", "date", "back", "people", "list", "name", "just", "over", "state", "year", "into", "email", "health", "world", "next", "used", "work", "last", "most", "products", "music", "data", "make", "them", "should", "product", "system", "post", "city", "policy", "number", "such", "please", "available", "copyright", "support", "message", "after", "best", "software", "then", "good", "video", "well", "where", "info", "rights", "public", "books", "high", "school", "through", "each", "links", "review", "years", "order", "very", "privacy", "book", "items", "company", "read", "group", "need", "many", "user", "said", "does", "under", "general", "research", "university", "january", "mail", "full", "reviews", "program", "life", "know", "games", "days", "management", "part", "could", "great", "united", "hotel", "real", "item", "international", "center", "ebay", "must", "store", "travel", "comments", "made", "development", "report", "member", "details", "line", "terms", "before", "hotels", "send", "right", "type", "because", "local", "those", "using", "results", "office", "education", "national", "design", "take", "posted", "internet", "address", "community", "within", "states", "area", "want", "phone", "shipping", "reserved", "subject", "between", "forum", "family", "long", "based", "code", "show", "even", "black", "check", "special", "prices", "website", "index", "being", "women", "much", "sign", "file", "link", "open", "today", "technology", "south", "case", "project", "same", "pages", "version", "section", "found", "sports", "house", "related", "security", "both", "county", "american", "photo", "game", "members", "power", "while", "care", "network", "down", "computer", "systems", "three", "total", "place", "following", "download", "without", "access", "think", "north", "resources", "current", "posts", "media", "control", "water", "history", "pictures", "size", "personal", "since", "including", "guide", "shop", "directory", "board", "location", "change", "white", "text", "small", "rating", "rate", "government", "children", "during", "return", "students", "shopping", "account", "times", "sites", "level", "digital", "profile", "previous", "form", "events", "love", "john", "main", "call", "hours", "image", "department", "title", "description", "insurance", "another", "shall", "property", "class", "still", "money", "quality", "every", "listing", "content", "country", "private", "little", "visit", "save", "tools", "reply", "customer", "december", "compare", "movies", "include", "college", "value", "article", "york", "card", "jobs", "provide", "food", "source", "author", "different", "press", "learn", "sale", "around", "print", "course", "canada", "process", "teen", "room", "stock", "training", "credit", "point", "join", "science", "categories", "advanced", "west", "sales", "look", "english", "left", "team", "estate", "conditions", "select", "windows", "photos", "thread", "week", "category", "note", "live", "large", "gallery", "table", "register", "however", "june", "october", "november", "market", "library", "really", "action", "start", "series", "model", "features", "industry", "plan", "human", "provided", "required", "second", "accessories", "cost", "movie", "forums", "march", "september", "better", "questions", "july", "yahoo", "going", "medical", "test", "friend", "come", "server", "study", "application", "cart", "staff", "articles", "feedback", "again", "play", "looking", "issues", "april", "never", "users", "complete", "street", "topic", "comment", "financial", "things", "working", "against", "standard", "person", "below", "mobile", "less", "blog", "party", "payment", "equipment", "login", "student", "programs", "offers", "legal", "above", "recent", "park", "stores", "side", "problem", "give", "memory", "performance", "social", "august", "quote", "language", "story", "sell", "options", "experience", "rates", "create", "body", "young", "america", "important", "field", "east", "paper", "single", "activities", "club", "example", "girls", "additional", "password", "latest", "something", "road", "gift", "question", "changes", "night", "hard", "texas", "four", "poker", "status", "browse", "issue", "range", "building", "seller", "court", "february", "always", "result", "audio", "light", "write", "offer", "blue", "groups", "easy", "given", "files", "event", "release", "analysis", "request", "china", "making", "picture", "needs", "possible", "might", "professional", "month", "major", "star", "areas", "future", "space", "committee", "hand", "cards", "problems", "london", "washington", "meeting", "become", "interest", "child", "keep", "enter", "california", "share", "similar", "garden", "schools", "million", "added", "reference", "companies", "listed", "baby", "learning", "energy", "delivery", "popular", "term", "film", "stories", "computers", "journal", "reports", "welcome", "central", "images", "president", "notice", "original", "head", "radio", "until", "cell", "color", "self", "council", "away", "includes", "track", "australia", "discussion", "archive", "once", "others", "entertainment", "agreement", "format", "least", "society", "months", "safety", "friends", "sure", "trade", "edition", "cars", "messages", "marketing", "tell", "further", "updated", "association", "able", "having", "provides", "david", "already", "green", "studies", "close", "common", "drive", "specific", "several", "gold", "living", "collection", "called", "short", "arts", "display", "limited", "powered", "solutions", "means", "director", "daily", "beach", "past", "natural", "whether", "electronics", "five", "upon", "period", "planning", "database", "says", "official", "weather", "land", "average", "done", "technical", "window", "france", "region", "island", "record", "direct", "microsoft", "conference", "environment", "records", "district", "calendar", "costs", "style", "front", "statement", "update", "parts", "ever", "downloads", "early", "miles", "sound", "resource", "present", "applications", "either", "document", "word", "works", "material", "bill", "written", "talk", "federal", "hosting", "rules", "final", "adult", "tickets", "thing", "centre", "requirements", "cheap", "kids", "finance", "true", "minutes", "else", "mark", "third", "rock", "gifts", "europe", "reading", "topics", "individual", "tips", "plus", "auto", "cover", "usually", "edit", "together", "videos", "percent", "fast", "function", "fact", "unit", "getting", "global", "tech", "meet", "economic", "player", "projects", "lyrics", "often", "subscribe", "submit", "germany", "amount", "watch", "included", "feel", "though", "bank", "risk", "thanks", "everything", "deals", "various", "words", "linux", "production", "commercial", "james", "weight", "town", "heart", "advertising", "received", "choose", "treatment", "newsletter", "archives", "points", "knowledge", "magazine", "error", "camera", "girl", "currently", "construction", "toys", "registered", "clear", "golf", "receive", "domain", "methods", "chapter", "makes", "protection", "policies", "loan", "wide", "beauty", "manager", "india", "position", "taken", "sort", "listings", "models", "michael", "known", "half", "cases", "step", "engineering", "florida", "simple", "quick", "none", "wireless", "license", "paul", "friday", "lake", "whole", "annual", "published", "later", "basic", "sony", "shows", "corporate", "google", "church", "method", "purchase", "customers", "active", "response", "practice", "hardware", "figure", "materials", "fire", "holiday", "chat", "enough", "designed", "along", "among", "death", "writing", "speed", "html", "countries", "loss", "face", "brand", "discount", "higher", "effects", "created", "remember", "standards", "yellow", "political", "increase", "advertise", "kingdom", "base", "near", "environmental", "thought", "stuff", "french", "storage", "japan", "doing", "loans", "shoes", "entry", "stay", "nature", "orders", "availability", "africa", "summary", "turn", "mean", "growth", "notes", "agency", "king", "monday", "european", "activity", "copy", "although", "drug", "pics", "western", "income", "force", "cash", "employment", "overall", "river", "commission", "package", "contents", "seen", "players", "engine", "port", "album", "regional", "stop", "supplies", "started", "administration", "institute", "views", "plans", "double", "build", "screen", "exchange", "types", "soon", "sponsored", "lines", "electronic", "continue", "across", "benefits", "needed", "season", "apply", "someone", "held", "anything", "printer", "condition", "effective", "believe", "organization", "effect", "asked", "mind", "sunday", "selection", "casino", "lost", "tour", "menu", "volume", "cross", "anyone", "mortgage", "hope", "silver", "corporation", "wish", "inside", "solution", "mature", "role", "rather", "weeks", "addition", "came", "supply", "nothing", "certain", "executive", "running", "lower", "necessary", "union", "jewelry", "according", "clothing", "particular", "fine", "names", "robert", "homepage", "hour", "skills", "bush", "islands", "advice", "career", "military", "rental", "decision", "leave", "british", "teens", "huge", "woman", "facilities", "kind", "sellers", "middle", "move", "cable", "opportunities", "taking", "values", "division", "coming", "tuesday", "object", "lesbian", "appropriate", "machine", "logo", "length", "actually", "nice", "score", "statistics", "client", "returns", "capital", "follow", "sample", "investment", "sent", "shown", "saturday", "christmas", "england", "culture", "band", "flash", "lead", "george", "choice", "went", "starting", "registration", "thursday", "courses", "consumer", "airport", "foreign", "artist", "outside", "furniture", "levels", "channel", "letter", "mode", "phones", "ideas", "wednesday", "structure"];

const cmdCheatsheet = [
  { cmd: "diskpart", desc: "Open disk partition tool" },
  { cmd: "select disk X & clean", desc: "Wipe selected disk (in diskpart)" },
  { cmd: "format fs=ntfs quick", desc: "Format partition (in diskpart)" },
  { cmd: "net user <user> <pass> /add", desc: "Create new local user" },
  { cmd: "net user <user> *", desc: "Prompt to change user password" },
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

  pwResult.value = pw; localStorage.setItem("isak_last_pw", pw);

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
  
  ppResult.value = result.join(ppSep.value) + ppSep.value + num; localStorage.setItem("isak_last_pp", ppResult.value);
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
  if (overlay) {
    overlay.classList.toggle("on");
    // Toggle body class for text glitch effects
    if (overlay.classList.contains("on")) {
      document.body.classList.add("crt-mode-active");
    } else {
      document.body.classList.remove("crt-mode-active");
    }
  }
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
