import {defineConfig} from 'vitepress'
import {withMermaid} from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'Ruslan Kokoev CV',
  description: 'Ruslan Kokoev CV',
  base: '/cv/',
  cleanUrls: true,
  mermaid: {
    flowchart: {
      useMaxWidth: false,
      htmlLabels: false,
      padding: 15,
    },
  },
  sitemap: {
    hostname: 'https://thumbrise.github.io/cv/',
  },
  head: [
    ['link', {rel: 'icon', type: 'image/svg+xml', href: '/cv/favicon.svg'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/cv/favicon-96x96.png'}],
    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/cv/apple-touch-icon.png'}],
    ['link', {rel: 'manifest', href: '/cv/site.webmanifest'}],
  ],

  themeConfig: {
    nav: [
      { text: 'English', link: '/' },
      { text: 'Русский', link: '/ru' },
    ],
    sidebar: {},
    socialLinks: [
      {icon: 'github', link: 'https://github.com/thumbrise'},
    ],
  },
}))
