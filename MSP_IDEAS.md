# MSP & Phone System Tool Ideas

Here are some suggested additions for the IT Swiss Army Knife, specifically tailored for MSPs and VoIP techs.

## Network & Sysadmin Tools
*   **IP Subnet Calculator:**
    *   Input IP/CIDR (e.g., 192.168.1.1/24).
    *   Output: Netmask, Network Address, Broadcast Address, Usable Host Range.
*   **DNS Record Checker:**
    *   Quick lookup for A, MX, TXT, CNAME, NS records.
    *   Useful for verifying mail migrations or website launches.
*   **Port Checker (Common):**
    *   Quick check if 80/443/3389/22 are open on a target IP (might need an external API due to browser restrictions).
*   **Epoch Time Converter:**
    *   Convert Unix timestamps (e.g., 1672531200) to human-readable dates (and vice-versa). Critical for reading logs.
*   **Base64 Encoder/Decoder:**
    *   Quickly decode Basic Auth headers or encoded strings.
*   **SPF/DMARC Visualizer:**
    *   Parse an SPF record and show if an IP is allowed.
    *   Explain DMARC policy tags in plain English.

## Phone System / VoIP Tools
*   **SIP Response Code Cheat Sheet:**
    *   Searchable list of SIP codes (e.g., "486 Busy Here", "503 Service Unavailable").
    *   Quick tips on what they usually mean in the real world.
*   **Bandwidth Calculator:**
    *   Input: Number of concurrent calls.
    *   Codec: G.711 (Uncompressed) vs G.729 (Compressed).
    *   Output: Estimated bandwidth usage (Up/Down).
*   **DTMF Tone Generator:**
    *   Buttons to play DTMF tones (0-9, *, #).
    *   Useful for testing if DTMF is passing through an IVR or trunk.
*   **Regex Tester for Dial Plans:**
    *   A simple regex tester pre-loaded with common dial plan patterns (e.g., `^1[2-9][0-9]{9}$` for US 11-digit dialing).

## Browser / Web
*   **User Agent Parser:**
    *   Paste a UA string, get "Chrome 120 on Windows 11".
*   **SSL Cert Checker:**
    *   Input domain, show Expiry Date and Issuer.
