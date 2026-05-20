$sha = git log -1 --format="%H"
$date = git log -1 --format="%ad" --date="short"
@"
// ── Interface version ──────────────────────────────────────────────────────
// This file is managed automatically by the update-version.ps1 / post-commit hook.
window.INTERFACE_VERSION_DATE = "$date";
window.INTERFACE_VERSION_SHA  = "$sha";
"@ | Set-Content -Path "dashboard/version.js"
