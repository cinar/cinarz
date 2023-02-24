import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig, defaultTheme } from "vuepress";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/cinarz/",
  head: [
    [
      "script",
      {
        src: "https://cdn.websitepolicies.io/lib/cookieconsent/cookieconsent.min.js",
        defer: true,
      },
    ],
    [
      "script",
      {},
      `
window.addEventListener("load",function(){window.wpcc.init({"colors":{"popup":{"background":"#fff0ca","text":"#000000","border":"#e0bc57"},"button":{"background":"#e0bc57","text":"#ffffff"}},"border":"thin","corners":"small","content":{"href":"https://zdo.com/privacy-policy"}})});
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
  alias: {
    "@theme/HomeFooter.vue": path.resolve(
      __dirname,
      "./components/HomeFooter.vue"
    ),
    "@theme/PageMeta.vue": path.resolve(__dirname, "./components/PageMeta.vue"),
  },
});
