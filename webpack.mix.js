const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss('src/css/app.css', 'web/css/app.css', [
  tailwindcss('./tailwind.config.js'),
]);