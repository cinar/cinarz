import { defineUserConfig, defaultTheme } from "vuepress";

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
      description: "Fiziko Kimya Profesörü",
    },
  },
  theme: defaultTheme({
    sidebar: false,
    locales: {
      "/": {
        selectLanguageName: "English",
        navbar: [
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
