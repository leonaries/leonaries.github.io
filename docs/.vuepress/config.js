import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { getDirname, path } from '@vuepress/utils'
import dotenv from 'dotenv'

// 加载环境变量
dotenv.config()

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'AI 猫叔',
  description: '记录AI学习与探索之旅',
  
  // 确保包含所有 Markdown 文件
  patterns: ['**/*.md', '!.vuepress', '!node_modules'],
  
  bundler: viteBundler({
    viteOptions: {
      define: {
        __HMR_CONFIG_NAME__: JSON.stringify('vuepress'),
        'process.env.FEISHU_APP_ID': JSON.stringify(process.env.FEISHU_APP_ID),
        'process.env.FEISHU_APP_SECRET': JSON.stringify(process.env.FEISHU_APP_SECRET),
        'process.env.FEISHU_WIKI_SPACE_ID': JSON.stringify(process.env.FEISHU_WIKI_SPACE_ID),
      },
    },
  }),

  clientConfigFile: path.resolve(__dirname, './client.js'),
  
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
        text: '猫叔感悟',
        link: '/thoughts/',
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
    // 禁用默认的侧边栏
    sidebar: false,
    sidebarDepth: 0,
    lastUpdated: false,
    contributors: false,
    editLink: false,
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => page.frontmatter.tags ?? [],
      maxSuggestions: 10,
    }),
  ],
})
