const host = "lixa.jp"
const domain = host
const projectName = "LIXA"
const pageTitle = "LIXA(リクサ) | イケてる男性であり続けるためのパーソナルジム"
const description = "群馬初、トレーナーが全員女性！食事管理、筋トレを通してかっこいい体作りをサポート。女性目線でキメ細やかに指導。理想のモテボディを手に入れましょう。"

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: pageTitle,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'keywords', content: '男性専用,パーソナルジム,パーソナルトレーニング,プライベートジム'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:400,700' },
      { rel: 'canonical', href: `https://${domain}` }
    ]
  },
  env: {
    mailgunKey: process.env.MAILGUN_KEY,
    mailBcc: process.env.MAIL_BCC,
    host,
    domain,
    projectName,
    pageTitle,
    description,
  },
  loading: '@/components/modules/Loading.vue',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ress',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/burger', ssr: false },
    '@/plugins/mailgun',
    '@/plugins/validate',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    sass: [
      "@/assets/sass/constants.sass",
      "bootstrap/scss/bootstrap.scss",
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['vue-scrollto/nuxt', { duration: 0, offset: -30 }],
    '@nuxtjs/toast'
  ],
  toast: {
    position: 'bottom-center',
    action: {
      text: '閉じる',
      onClick(_e, toastObject) {
        toastObject.goAway(0)
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate/dist/rules',
    ],
  }
}
