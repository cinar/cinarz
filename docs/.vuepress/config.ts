import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  base: "/cinarz/",
  head: [
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-HBGHQKQHCC",
        async: true,
      },
    ],
    [
      "script",
      {},
      `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HBGHQKQHCC');
    `,
    ],
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "Zekiye Çınar, Ph.D.",
      description: "Professor of Physical Chemistry",
    },
    "/tr/": {
      lang: "tr-TR",
      title: "Prof. Dr. Zekiye Çınar",
      description: "Fiziko Kimya Profesörü",
    },
  },
  theme: defaultTheme({
    contributors: false,
    lastUpdated: false,
    sidebar: false,
    locales: {
      "/": {
        selectLanguageName: "English",
        navbar: [
          "/biography",
          "/quantum-chemistry",
          "/publications",
          "/communications",
          "/theses",
          "/courses",
        ],
      },
      "/tr/": {
        selectLanguageName: "Türkçe",
        selectLanguageText: "Dil",
        selectLanguageAriaLabel: "Dil seçiniz",
        navbar: [
          "/tr/ozgecmis",
          "/tr/kuantum-kimyasi",
          "/tr/yayinlar",
          "/tr/bildiriler",
          "/tr/tezler",
          "/tr/dersler",
        ],
      },
    },
  }),
});
