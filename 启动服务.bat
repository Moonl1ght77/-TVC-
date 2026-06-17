@echo off
chcp 65001 >nul
title TVC 手册网站启动服务

echo ========================================
echo TVC 手册网站启动服务
echo ========================================
echo.

if not exist package.json (
  echo 请把本脚本放在项目根目录运行
  echo.
  pause
  exit /b 1
)

where node >nul 2>nul
if errorlevel 1 (
  echo 未检测到 Node.js，请先安装 Node.js
  echo.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo 未检测到 npm，请确认 Node.js 是否安装完整
  echo.
  pause
  exit /b 1
)

if not exist node_modules (
  echo 未检测到 node_modules，正在安装依赖...
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo 依赖安装失败，请查看上方报错信息
    echo.
    pause
    exit /b 1
  )
) else (
  echo 已检测到 node_modules，跳过依赖安装
)

echo.
echo 正在打开浏览器：http://localhost:3000
start "" "http://localhost:3000"

echo.
echo 正在启动本地开发服务...
echo 如需停止服务，请在本窗口按 Ctrl + C
echo.
call npm run dev

echo.
echo 服务已停止或启动失败，请查看上方信息
echo.
pause
