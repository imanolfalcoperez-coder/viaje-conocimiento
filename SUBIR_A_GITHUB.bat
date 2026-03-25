@echo off
chcp 65001 >nul
echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║   El Viaje del Conocimiento — Subir a GitHub Pages    ║
echo ╚════════════════════════════════════════════════════════╝
echo.

REM ── Comprobar que Git está instalado ──────────────────────
git --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Git no está instalado.
    echo Descárgalo en: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo [1/5] Inicializando repositorio Git...
git init
git branch -M main

echo.
echo [2/5] Configurando usuario...
git config user.email "imanolfalcoperez@gmail.com"
git config user.name "imanolfalcoperez-coder"

echo.
echo [3/5] Añadiendo todos los archivos del juego...
git add .
git status --short

echo.
echo [4/5] Creando commit inicial...
git commit -m "El Viaje del Conocimiento v1.0 - Juego educativo RPG 6 Primaria"

echo.
echo [5/5] Conectando con GitHub y subiendo...
echo.
echo  IMPORTANTE: Ahora debes crear el repositorio en GitHub:
echo  1. Abre https://github.com/new en tu navegador
echo  2. Nombre del repositorio: viaje-conocimiento
echo  3. Dejalo en PUBLICO (necesario para GitHub Pages gratis)
echo  4. NO marques ninguna casilla extra (sin README, sin .gitignore)
echo  5. Haz clic en "Create repository"
echo  6. Vuelve aquí y pulsa cualquier tecla para continuar
echo.
pause

git remote add origin https://github.com/imanolfalcoperez-coder/viaje-conocimiento.git
git push -u origin main

echo.
echo ══════════════════════════════════════════════════════════
echo  PASO FINAL — Activar GitHub Pages:
echo  1. Ve a: https://github.com/imanolfalcoperez-coder/viaje-conocimiento/settings/pages
echo  2. En "Branch" selecciona: main
echo  3. En carpeta selecciona: / (root)
echo  4. Haz clic en Save
echo  5. Espera 1-2 minutos
echo  6. Tu juego estará en:
echo     https://imanolfalcoperez-coder.github.io/viaje-conocimiento/
echo ══════════════════════════════════════════════════════════
echo.
pause
