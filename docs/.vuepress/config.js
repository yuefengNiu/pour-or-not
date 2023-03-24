module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/pour-or-not/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false
  }
}