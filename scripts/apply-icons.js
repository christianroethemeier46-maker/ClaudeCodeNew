// Kopiert das Würfel-Icon in das generierte Android-Projekt (nach `npx cap add android`)
const fs = require("fs"), path = require("path");
const src = "resources/android", res = "android/app/src/main/res";
for (const d of fs.readdirSync(src)) {
  for (const f of fs.readdirSync(path.join(src, d))) fs.copyFileSync(path.join(src, d, f), path.join(res, d, f));
}
fs.writeFileSync(path.join(res, "values/ic_launcher_background.xml"),
  '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#14121F</color>\n</resources>\n');
console.log("Icons angewendet");
