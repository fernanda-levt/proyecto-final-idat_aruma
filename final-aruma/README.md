# 🛍️ Proyecto Front End – Réplica visual Aruma 🌸

## 📌 Descripción del proyecto

Este proyecto es una **réplica educativa** de la página web de **Aruma**, desarrollada con **React + Vite**, enfocada en el diseño de la interfaz, componentes reutilizables y efectos visuales.
El objetivo principal es practicar **estructuración**, **maquetación**, **estilos**, **interactividad**, y **componentes visuales** modernos. Además de recrear la experiencia visual del e-commerce, sin funcionalidades reales de backend, aplicando buenas prácticas de desarrollo Front End.


## 🔗 Demo del proyecto:
https://github.com/fernanda-levt/proyecto-final-idat_aruma.git

## 🛠️ Tecnologías utilizadas

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript (ES6)
- 🎨 CSS3
- 🌐 HTML5
- 📦 Git & GitHub
- 🚀 GitHub Pages (deploy)

## ✨ Funcionalidades implementadas

- Header dividido en subcomponentes
- Barra de búsqueda visual
- Banners promocionales
- Carruseles de productos reutilizables
- Tarjetas de productos con:
  - Efecto hover
  - Botón de añadir al carrito
  - Ícono de favoritos
- Categorías con efecto hover
- Secciones promocionales con enlaces
- Footer informativo
- Deploy funcional en GitHub Pages

## 🧩 Estructura del proyecto

```
final-aruma/
├── public/
│   ├── icons/
│   │   ├── favicon-aruma_32x32.png
│   │   └── logo-aruma-nombre.png
│   └── images/
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Promobar.jsx
│   │   │   └── Searchbar.jsx
│   │   │
│   │   ├── Banners.jsx
│   │   ├── BannersLinks.jsx
│   │   ├── Categorybar.jsx
│   │   ├── Footer.jsx
│   │   ├── Phrase.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductCarousel.jsx
│   │   ├── PromoGrid.jsx
│   │   └── SocialGrid.jsx
│   │
│   ├── data/
│   │   ├── bestSellers.js
│   │   ├── categories.js
│   │   └── newProducts.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## ▶️ Instalación y ejecución local

1. Clona el repositorio:

        git clone https://github.com/fernanda-levt/proyecto-final-idat_aruma.git


2. Ingresa a la carpeta del proyecto:

        cd final-aruma


3. Instala las dependencias:

        npm install


4. Ejecuta el proyecto:

        npm run dev

## 🚀 Deploy

El proyecto fue desplegado utilizando GitHub Pages.

Para desplegar nuevamente:

npm run build
npm run deploy

## 📌 Consideraciones

Este proyecto es solo visual, no incluye backend ni base de datos.

Las imágenes y marcas son utilizadas con fines educativos.

Inspirado en la web oficial de Aruma Perú.

## 👩‍💻 Autora

Fernanda Lévano
Proyecto desarrollado como práctica de Front End.

## 📝 Licencia

Este proyecto es de uso educativo y no comercial.