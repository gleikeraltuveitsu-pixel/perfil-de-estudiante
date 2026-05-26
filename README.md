# 🎓 Perfil de Estudiante — React + Vite

> Aplicación web moderna desarrollada con **React** y **Vite** para presentar un perfil profesional y académico de forma limpia, modular y responsiva.

---

## 📘 Descripción General

¡Bienvenido!

Este repositorio contiene una aplicación web responsiva diseñada para mostrar el perfil profesional y académico de un estudiante de Ingeniería de Sistemas mediante una interfaz moderna, eficiente y visualmente atractiva.

La interfaz original desarrollada en HTML y CSS fue completamente migrada hacia una arquitectura basada en componentes reutilizables de React, mejorando:

- Escalabilidad
- Reutilización
- Organización del código
- Rendimiento del desarrollo

---

# 📂 Estructura del Proyecto

El proyecto sigue una arquitectura limpia y semántica para facilitar el mantenimiento y la escalabilidad.

```text
perfil-de-estudiante/
├── .gitignore
│   ┗ Archivos y carpetas ignorados por Git
│
├── index.html
│   ┗ Punto de entrada principal HTML5
│
├── package.json
│   ┗ Dependencias y scripts del proyecto
│
├── vite.config.js
│   ┗ Configuración del empaquetador Vite
│
└── src/
    ├── main.jsx
    │   ┗ Renderizado principal de React
    │
    ├── App.jsx
    │   ┗ Componente raíz de la aplicación
    │
    ├── App.css
    │   ┗ Variables globales y estilos principales
    │
    └── components/
        ├── Header.jsx
        │   ┗ Encabezado y navegación
        │
        ├── Hero.jsx
        │   ┗ Presentación principal del estudiante
        │
        ├── FeatureCard.jsx
        │   ┗ Tarjetas reutilizables para habilidades y proyectos
        │
        └── Footer.jsx
            ┗ Pie de página y créditos
```

---

# 🚀 Guía de Instalación y Desarrollo Local

Sigue estos pasos para ejecutar el proyecto localmente.

---

## 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/gleikeraltuveitsu-pixel/perfil-de-estudiante.git
```

---

## 2️⃣ Acceder al Directorio

```bash
cd perfil-de-estudiante
```

---

## 3️⃣ Instalar Dependencias

```bash
npm install
```

Esto instalará todas las dependencias necesarias definidas en el archivo `package.json`.

---

## 4️⃣ Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

Una vez iniciado el servidor, abre tu navegador y accede a:

```text
http://localhost:5173
```

---

# 🛠️ Tecnologías Utilizadas

---

## ⚛️ React 18

Biblioteca moderna de JavaScript para construir interfaces de usuario basadas en componentes reutilizables.

---

## ⚡ Vite

Herramienta de construcción ultrarrápida optimizada para proyectos frontend modernos.

Características:

- Hot Reload instantáneo
- Build optimizado
- Configuración ligera
- Excelente rendimiento

---

## 🎨 CSS3 Moderno

Uso de:

- Variables globales
- Flexbox
- CSS Grid
- Diseño responsive
- Arquitectura visual modular

---

# 📤 Subir Cambios al Repositorio

Una vez realizados los cambios en el proyecto:

```bash
git add README.md
git commit -m "docs: actualizar README con estructura y guía de clonado"
git push origin main
```

---

# 🌐 Despliegue en GitHub Pages con Vite

Debido a que React necesita compilarse antes de ser publicado, GitHub Pages requiere una configuración adicional.

---

## 📦 Paso 1 — Instalar gh-pages

```bash
npm install -D gh-pages
```

---

## ⚙️ Paso 2 — Configurar vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/perfil-de-estudiante/',
  server: {
    host: true,
    port: 5173
  }
})
```

---

## 📜 Paso 3 — Configurar package.json

Añade estos scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## 🚀 Paso 4 — Desplegar el Proyecto

```bash
npm run deploy
```

---

# ✅ Resultado

Después del despliegue, tu aplicación React estará publicada en GitHub Pages y accesible desde internet.

---

# 📚 Conceptos Aplicados

| Concepto | Implementación |
|---|---|
| Arquitectura modular | Componentes React |
| Desarrollo moderno | Vite |
| Responsive Design | Flexbox + Grid |
| Gestión de dependencias | npm |
| Build optimizado | vite build |
| Deploy automático | gh-pages |

---

# 📄 Licencia

Proyecto desarrollado con fines educativos y de aprendizaje profesional.
