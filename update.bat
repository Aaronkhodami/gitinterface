@echo off
setlocal EnableExtensions

title Portable Workspace Updater
pushd "%~dp0" || (
  echo.
  echo Could not access repo folder!
  pause
  exit /b 1
)

echo.
echo === Updating Portable Workspace ===
echo.
git pull origin master
if errorlevel 1 (
  echo.
  echo Update failed!
  popd
  pause
  exit /b 1
)

for /f "usebackq delims=" %%a in (`git log -1 --format^=%%H`) do set "sha=%%a"
for /f "usebackq delims=" %%a in (`git log -1 --date^=short --format^=%%ad`) do set "d=%%a"

if not defined sha (
  echo.
  echo Could not read current git commit hash.
  popd
  pause
  exit /b 1
)

> "dashboard\version.js" (
  echo // -- Interface version ------------------------------------------------------
  echo // This file is managed automatically by git commit hook.
  echo window.INTERFACE_VERSION_DATE = "%d%";
  echo window.INTERFACE_VERSION_SHA  = "%sha%";
)

set "shortSha=%sha:~0,7%"
echo.
echo Updated to %shortSha% (%d%)

popd
timeout /t 3 /nobreak >nul
endlocal
