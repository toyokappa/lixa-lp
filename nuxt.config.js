const host = "lixa.jp"
const domain = host
const projectName = "美女ジムLIXA"
const pageTitle = "美女ジムLIXA 前橋店 | 男性人気No.1！美女が教えるパーソナルジム"
const description = "群馬初！トレーナーは美女のみ！前橋下石倉町にオープン！食事管理、筋トレを通してかっこいい体作りをサポート。女性目線でキメ細やかに指導。理想のモテボディを手に入れましょう。"

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
      { name: 'keywords', content: '前橋,パーソナルジム,パーソナルトレーニング,プライベートジム'},
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'fb:app_id', content: '328198145005843' },
      { name: 'msapplication-TileColor', content: '#00aba9' },
      { name: 'theme-color', content: '#1f2233' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: 'safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:400,700' },
    ]
  },
  env: {
    ctfSpaceId: process.env.CTF_SPACE_ID,
    ctfEnvId: process.env.CTF_ENV_ID,
    ctfCdaAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
    ctfCmaAccessToken: process.env.CTF_CMA_ACCESS_TOKEN,
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
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/bootstrap', ssr: false },
    { src: '~/plugins/contentful' },
    { src: '~/plugins/contentful-management' },
    '@/plugins/mailgun',
    '@/plugins/validate',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        }
      }
    ],
  ],
  styleResources: {
    sass: [
      "@/assets/sass/constants.sass",
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['vue-scrollto/nuxt', { duration: 0, offset: -30 }],
    '@nuxtjs/sitemap',
    '@nuxtjs/redirect-module',
    '@nuxtjs/robots',
    '@nuxtjs/gtm',
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
  sitemap: {
    path: '/sitemap.xml',
    hostname: `https://${domain}`,
    gzip: true,
    trailingSlash: true,
  },
  router: {
    trailingSlash: true,
  },
  redirect: [
    {
      from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$',
      to: '$1/$2',
      statusCode: 301
    }
  ],
  robots: {
    UserAgent: '*',
    // クローリングしないパスを記述
    Disallow: ['/reserve/complete/', '/reserve/error/'],
    // sitemap.xmlのURLを記述
    Sitemap: `https://${domain}/sitemap.xml`,
  },
  gtm: {
    id: 'GTM-NT8Z4NL'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate/dist/rules',
    ],
  }
}
