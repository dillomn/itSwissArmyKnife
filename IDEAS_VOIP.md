# 3CX & Yeastar Tool Ideas

Since you specialize in 3CX and Yeastar, generic VoIP tools are noise. Here are tools specific to provisioning and managing those ecosystems.

## Phone System Helpers
1.  **Port Firewall Reference (3CX/Yeastar):**
    *   A quick reference list of ports that *must* be open.
    *   **3CX:** 5060 (SIP), 5090 (Tunnel), 9000-10999 (RTP), 443 (HTTPS).
    *   **Yeastar:** 5060, 10000-12000 (RTP), 8088 (HTTP).
    *   *Why:* Copy-pasting these into a firewall ticket or router config is a daily task.

2.  **MAC Formatter for Provisioning:**
    *   You have a MAC: `00:15:65:XX:XX:XX`.
    *   3CX/Yeastar often want: `001565XXXXXX`.
    *   **Action:** A button in the MAC widget: "Copy for Provisioning" (Strips colons, uppercases).

3.  **Feature Code Cheat Sheet:**
    *   Toggle between **3CX** and **Yeastar** modes.
    *   **3CX:** `*777` (Echo), `*20*` (Pickup), `*4` (Login/Logout).
    *   **Yeastar:** `*74` (Call Pickup), `*99` (Voicemail).
    *   *Why:* Checking the manual for "How do I pick up a parked call again?" is annoying.

4.  **Welcome Email Template Generator:**
    *   Fill in: Extension, Pin, WebClient URL.
    *   Output: A perfectly formatted "Welcome to your new phone" email text to copy-paste to users.

5.  **Yealink/Fanvil/Grandstream Default Passwords:**
    *   Since you use these systems, you likely use these phones.
    *   Quick lookup for the *phone's* web interface default creds (e.g., `admin` / `admin`).

## IT / General
6.  **"What is my WAN IP?":**
    *   Still essential for whitelisting yourself in the 3CX console security settings.
