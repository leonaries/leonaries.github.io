import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'AI 猫叔',
  description: '记录AI学习与探索之旅',
  
  bundler: viteBundler({
    viteOptions: {
      define: {
        __HMR_CONFIG_NAME__: JSON.stringify('vuepress'),
      },
    },
  }),
  
  theme: defaultTheme({
    logo: '/images/uncle-cat-1.png',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '关于我',
        link: '/about/',
      },
      {
        text: 'AI资讯',
        link: '/news/',
      },
      {
        text: 'AI工具',
        children: [
          {
            text: '大语言模型',
            link: '/tools/llm/',
          },
          {
            text: '文本生成',
            link: '/tools/text/',
          },
          {
            text: '图像生成',
            link: '/tools/image/',
          },
          {
            text: '视频生成',
            link: '/tools/video/',
          },
          {
            text: 'AI自动化',
            link: '/tools/automation/',
          },
        ],
      },
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: false,
    contributors: false,
    editLink: false,
  }),
})
