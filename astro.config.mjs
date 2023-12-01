import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import expressiveCode from "astro-expressive-code";

const astroExpressiveCodeOptions = {
  themes: ["one-dark-pro", "vitesse-light"], // "one-dark-pro"
  themeCssSelector: (theme) => {
    if (theme.name == "vitesse-light")
      return `[data-theme='autumn']`;
    else if (theme.name == "one-dark-pro")
      return `[data-theme='dracula']`;
  },
  customizeTheme: (theme) => {
    if (theme.name == "one-dark-pro") {
      theme.colors["tab.activeBorder"] = "#bd93f9";

    } else if (theme.name == "vitesse-light") {
      theme.colors["tab.activeBorderTop"] = "#d85251";
    }

    return theme;
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://fabio-dscar.github.io',
  integrations: [expressiveCode(astroExpressiveCodeOptions), mdx(), sitemap(), tailwind()]
});