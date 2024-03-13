# Art gallery website

I found many challenges in this project, such as creating a *two-page website*, using external *Leaflet* library to display the map or trying *GSAP* library to make scroll animations (this project turned out to be a great place to do it!). By using the *Leaflet* and *GSAP* libraries, I had to learn and use *Webpack* to bundle my JavaScript files, which later on was switchwed to **Vite**.

- Live Site URL: [design-portfolio-tediko.netlify.app](https://art-gallery-tediko.netlify.app/)

## Table of contents

- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Built with](#built-with)
- [Overview](#overview)
  - [Screenshot](#screenshot)
- [Author](#author)

## My process

Originally I created the project using **Webpack** to bundle my JavaScript files. But while reading more about diffrent bundlers or tools I wanted to check what the working process with other ones looks like. I switched *Webpack* with **Vite** (you can check [#1](https://github.com/tediko/art-gallery/pull/1) PR in github). Surprisingly there weren't many problems when changing. The Vite is simple to configure, which is minimal.

Instead of adding a container to each section that limits our content to a certain width and positions it in the middle of the screen, leaving us the option for the parent element to still have the value of the entire width of the page if we wanted to add a background or photo, I used **CSS layout grid breakouts**, which gets rid of redundant unnecessary containers by defining the grid and its columns template for main grid-container. 

ScrollTrigger animations using **GSAP** are disabled for users who have set `prefers-reduced-motion`.     Additionally, I created a fallback if javascript was not loaded so that the "initial settings" of the animation would not be loaded. Animations are disabled on mobile devices. A similar fallback has been added for the **Leaflet** `#map` container. If javascript does not load, the container will not be displayed at all so as not to leave empty space on the page.

I added **skip-to-content** links, even though they weren't really needed in this case, I happened to see an article about them so I decided to use them.

### What I learned

-   [GSAP library](https://gsap.com/docs/v3/) - **GSAP** is a JavaScript library for building high-performance animations that work in every major browser.
- [Leaflet library](https://leafletjs.com/) - **Leaflet** is the leading open-source JavaScript library for mobile-friendly interactive maps.
- [Font Awesome](https://fontawesome.com/) - **Font Awesome** is the icon library and toolkit.
- [Vite](https://vitejs.dev/) - **Vite** is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: a *dev server*, and *build command* that bundles your code with *Rollup*.
- [Webpack](https://webpack.js.org/) - **Webpack** is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
- [CSS layout grid breakouts](https://ryanmulligan.dev/blog/layout-breakouts/) - Page layout structure using CSS Grid to get rid of redundant unnecessary containers.
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) - The **`prefers-reduced-motion`**  is used to detect if a user has enabled a setting on their device to minimize the amount of non-essential motion. The setting is used to convey to the browser on the device that the user prefers an interface that removes, reduces, or replaces motion-based animations.
- [skip-to-content link](https://css-tricks.com/how-to-create-a-skip-to-content-link/) - Skip links are little internal navigation links that help users move around a page. They’re often hidden from view and used as an accessibility enhancement that lets keyboard users and screen readers jump from the top of the page to the content without have to go through other elements on the page first.

### Built with

-   [Sass CSS pre-processor](https://sass-lang.com/). **Sass** is a stylesheet language that’s compiled to CSS. It allows to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.
-   [Sass file structure](https://gist.github.com/rveitch/84cea9650092119527bc) called **7-1 Pattern**. It offers great way to modularize Sass file structure and help keep things easier to maintain. It's all about having everything in order so it is easier to work with code.
-   Reduced browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on by using [CSS Reset by Andy Bell](https://piccalil.li/blog/a-more-modern-css-reset/)
-   [BEM - Block, Element, Modifier](https://getbem.com/) methodology, which is a popular naming convention for classes in HTML and CSS. BEM is useful when it comes to larger, more complex projects when code organization becomes crucial. The idea behind it is to speed up the development process, and ease the teamwork of developers by arranging CSS classes into independent modules.
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). Grid is a powerful tool for creating two-dimensional layouts on the web.

## Overview

### Screenshot

![Design preview for the Single-page design portfolio ](./preview.jpg)

## Author

- Frontend Mentor - [@tediko](https://www.frontendmentor.io/profile/tediko)
- Twitter - [@tediko123](https://www.twitter.com/tediko123)
