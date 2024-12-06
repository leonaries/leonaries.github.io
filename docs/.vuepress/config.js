import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'AI 猫叔',
  description: '记录AI学习与探索之旅',
  
  // 指定打包工具
  bundler: viteBundler(),
  
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
      {
        text: 'AI博主推荐',
        link: '/creators/',
      },
    ],
    
    sidebar: 'auto',
    
    // 编辑链接
    editLink: false,
    
    // 页脚
    footer: 'MIT Licensed | Copyright 2023-present',
  }),
  
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  base: '/',
})
