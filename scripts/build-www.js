// Kopiert die Web-App nach www/ (Capacitor webDir)
const fs = require("fs");
fs.rmSync("www", { recursive: true, force: true });
fs.mkdirSync("www");
for (const f of ["index.html", "manifest.json", "sw.js", "icon.svg", "icon-192.png", "icon-512.png"]) fs.copyFileSync(f, "www/" + f);
