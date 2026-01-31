# IT Swiss Army Knife

A "Techie-First" Chrome/Edge extension for MSPs, Sysadmins, and IT Pros.  
Packed with quick-access tools that respect your intelligence and your dark mode preferences.

![Version](https://img.shields.io/badge/version-1.3-green) ![License](https://img.shields.io/badge/license-MIT-blue)

## 🛠️ Features

*   **🔐 Password Generator:** High entropy, custom length, instant copy.
*   **🧠 Passphrase Generator:** `Correct-Horse-Battery-Staple` style (with a random number for compliance).
*   **🖥️ MAC Vendor Lookup:** Instant offline database lookup for OUI prefixes.
*   **🔌 Port Sniffer:** Quick check if a web server (80/443/8080) is reachable from your browser.
*   **🅽 NATO Alphabet:** Clickable tiles or type-to-highlight. Perfect for spelling "J-8-X-9" over the phone.
*   **💻 CMD Cheat Sheet:** Scrollable list of essential Windows admin commands.
*   **📝 Persistent Scratchpad:** Auto-saving text area for serial numbers/notes during calls.
*   **🕵️ Incognito Tools:**
    *   One-click "Open Current Tab in Incognito".
    *   Save "Always Incognito" shortcuts (great for O365 multiple tenant management).

---

## 📥 Installation (Firefox)

This extension is side-loaded as a Temporary Add-on.

1.  **Download the Code:**
    *   `git clone -b firefox https://github.com/dillomn/itSwissArmyKnife.git`
    *   (Or verify you are on the `firefox` branch).

2.  **Open Debugging:**
    *   Go to `about:debugging` in the address bar.
    *   Click **"This Firefox"** on the left.

3.  **Load Temporary Add-on:**
    *   Click **"Load Temporary Add-on..."**.
    *   Select the `manifest.json` file from the downloaded folder.

4.  **Note:**
    *   Temporary add-ons are removed when you close Firefox. To install permanently, you would need to zip it and sign it via Mozilla Add-ons Developer Hub (or use Developer Edition with signature checks disabled).

## 🛡️ Privacy
*   **Offline First:** All logic (passwords, MAC lookup, NATO) runs locally.
*   **No Tracking:** We don't want your data. We have enough tickets to deal with.
*   **Permissions:**
    *   `activeTab`: Required for "Open in Incognito".
    *   `storage`: Required for saving Scratchpad notes and Incognito shortcuts locally.

---
*Built for the trenches.*
