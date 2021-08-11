export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '多種多様な内容を書いていきます。' },
      { hid: 'og:site_name', property: 'og:site_name', content: "学生エンジニアの日常" },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://kinjyo.me' },
      { hid: 'og:title', property: 'og:title', content: "学生エンジニアの日常" },
      { hid: 'og:description', property: 'og:description', content: '多種多様な日常を書いていきます。' },
      { hid: 'og:image', property: 'og:image', content: 'https://kinjyo.me/_nuxt/img/image.1c1b45f.png' },
      { name: 'twitter:card', content: 'summary_large_image' }, //twitterの画像サイズ
      { name: "google-site-verification", content: "PtYzxYyQoXOUhMNBGYRzN56uPOUCSR5_6dFkZ22v0I4" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/google-gtag',
    '@nuxtjs/dayjs',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-9995998124093655',
      pageLevelAds: true,
      analyticsUacct: 'G-G2T5H3H55Y',
      analyticsDomainName: 'my-blog.jp'
    }],

  ],
  'google-gtag': {
    id: 'G-G2T5H3H55Y',  //サイトのID
    debug: true,  // 開発環境でも表示したい場合
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: { plugins: [["@babel/plugin-proposal-private-property-in-object", { "loose": true }]]}
  }
}
