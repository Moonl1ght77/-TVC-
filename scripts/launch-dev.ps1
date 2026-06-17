$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $ProjectRoot

Write-Host ""
Write-Host "==========================================" -ForegroundColor DarkYellow
Write-Host "  TVC Manual Site Launcher" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor DarkYellow
Write-Host ""
Write-Host "Project folder: $ProjectRoot"
Write-Host ""

if (!(Test-Path "package.json")) {
    Write-Host "ERROR: package.json was not found." -ForegroundColor Red
    Write-Host "This launcher must be placed in the project root folder." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "OK: package.json found." -ForegroundColor Green

$node = Get-Command node -ErrorAction SilentlyContinue
if (!$node) {
    Write-Host "ERROR: Node.js was not found." -ForegroundColor Red
    Write-Host "Please install Node.js LTS first: https://nodejs.org/" -ForegroundColor Yellow
    Start-Process "https://nodejs.org/"
    Read-Host "Press Enter to exit"
    exit 1
}

$npm = Get-Command npm.cmd -ErrorAction SilentlyContinue
if (!$npm) {
    Write-Host "ERROR: npm was not found." -ForegroundColor Red
    Write-Host "Please reinstall Node.js LTS." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Node version:" -ForegroundColor Cyan
node -v

Write-Host "npm version:" -ForegroundColor Cyan
npm.cmd -v

Write-Host ""

if (!(Test-Path "node_modules")) {
    Write-Host "node_modules not found. Running npm install..." -ForegroundColor Yellow
    npm.cmd install

    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "ERROR: npm install failed." -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-Host "node_modules found. Skipping npm install." -ForegroundColor Green
}

Write-Host ""
Write-Host "Starting dev server..." -ForegroundColor Yellow
Write-Host "Browser will open: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""

Start-Job -ScriptBlock {
    Start-Sleep -Seconds 4
    Start-Process "http://localhost:3000"
} | Out-Null

npm.cmd run dev

Write-Host ""
Write-Host "Dev server stopped." -ForegroundColor Yellow
Read-Host "Press Enter to exit"
