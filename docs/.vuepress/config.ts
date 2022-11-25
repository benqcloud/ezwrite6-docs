import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import {
  head,
  navbarEn,
  sidebarEn,
} from './configs/index.js'

export default defineUserConfig({
  // set site base to default value
  base: '/',

  // extra tags in `<head>`
  head,

  // configure default theme
  theme: defaultTheme({

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: 'auto',
      },
    },
  }),
  lang: 'en-US',
  title: 'EZWrite6 Documentation',
  description: 'Find feature requests, FAQs, and more.',
})
