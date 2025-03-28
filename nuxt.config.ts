// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n","nuxt-swiper"],
  app: {
    head: {
      htmlAttrs: {
        lang: "tr",
      },  
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "Content-Type", content: "text/html; charset=UTF-8" }
      ],
      title: "Guest24 - To find the unforgettable",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/img/favicon.png" },
        { rel: "stylesheet", href: "/assets/css/app.css" },
        { rel: "stylesheet", href: "/assets/css/textanimation.css" },
        { rel: "stylesheet", href: "/assets/css/magnific-popup.css" },
      ],
      script: [
        { src: "/assets/js/apexcharts.js", defer: true },
        { src: "/assets/js/bootstrap-select.min.js", defer: true },
        { src: "/assets/js/bootstrap.min.js", defer: true },
        { src: "/assets/js/count-down.js", defer: true },
        { src: "/assets/js/countto.js", defer: true },
        { src: "/assets/js/curved.js", defer: true },
        { src: "/assets/js/jquery.fancybox.js", defer: true },
        { src: "/assets/js/jquery.magnific-popup.min.js", defer: true },
        { src: "/assets/js/jquery.min.js", defer: true },
        { src: "/assets/js/jquery.nice-select.min.js", defer: true },
        { src: "/assets/js/line-chart.js", defer: true },
        { src: "/assets/js/main.js", defer: true },
        { src: "/assets/js/map.js", defer: true },
        { src: "/assets/js/map.min.js", defer: true },
        { src: "/assets/js/plugin.js", defer: true },
        { src: "/assets/js/price-ranger.js", defer: true },
        { src: "/assets/js/shortcodes.js", defer: true },
      ],
    },
  },
  i18n: {
    lazy: true,
    langDir: "locales/",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "de", iso: "de-DE", name: "German", file: "de.json" },
      { code: "tr", iso: "tr-TR", name: "Turkish", file: "tr.json" }
    ],
    defaultLocale: "tr",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root"
    }
  },
  devtools: { enabled: true },
});
