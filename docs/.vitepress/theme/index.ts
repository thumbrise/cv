import DefaultTheme from 'vitepress/theme'
import {Theme} from "vitepress";
import {yandexMetrika} from "@hywax/vitepress-yandex-metrika";
export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    yandexMetrika(router, {
      counter: {
        id: 112519031
      },
    })
  },
} satisfies Theme