@echo off
title Portable Workspace Updater
cd /d "%~dp0"
echo.
echo === Updating Portable Workspace ===
echo.
git pull origin master
if %errorlevel% neq 0 (
  echo.
  echo Update failed!
  timeout /t 5 /nobreak >nul
  exit /b 1
)
for /f "tokens=*" %%a in ('git log -1 --format="%H"') do set "sha=%%a"
for /f "tokens=*" %%a in ('git log -1 --format="%ad" --date=short') do set "d=%%a"
(
  echo // -- Interface version ------------------------------------------------------
  echo // This file is managed automatically by git pre-commit hook.
  echo window.INTERFACE_VERSION_DATE = "%d%";
  echo window.INTERFACE_VERSION_SHA  = "%sha%";
) > "dashboard\version.js"
echo.
echo Updated to %sha:~0,7% (%d%^)
timeout /t 3 /nobreak >nul
