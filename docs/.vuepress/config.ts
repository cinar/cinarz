import { defineUserConfig, defaultTheme } from "vuepress";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  base: "/cinarz/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Zekiye Çınar, Ph.D.",
      description: "Professor of Physical Chemistry",
    },
    "/tr/": {
      lang: "tr-TR",
      title: "Prof. Dr. Zekiye Çınar",
      description: "Fizikokimya Profesörü",
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
  plugins: [
    sitemapPlugin({
      hostname: "zdo.com",
      changefreq: "monthly",
    }),
  ],
});
