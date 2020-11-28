module.exports = {
  title: "十二翼堕落天使",
  description: '谁的一句来日方长，让我目睹了人走茶凉',
  dest: 'docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ["script", { language: "javascript", type: "text/javascript", src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js" }],
    ["script", { language: "javascript", type: "text/javascript", src: "/js/MouseClickEffect.js" }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [],
    sidebar: {},
    blogConfig: {},
    friendLink: [],
    logo: '/img/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    author: 'icefery',
    authorAvatar: '/img/avatar.jpg',
    startYear: '2019'
  },
  markdown: {
    lineNumbers: true
  }
}  
