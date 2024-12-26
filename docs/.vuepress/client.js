import { defineClientConfig } from '@vuepress/client'
import ThoughtsGrid from './components/ThoughtsGrid.vue'
import HomePage from './components/HomePage.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ThoughtsGrid', ThoughtsGrid)
    app.component('HomePage', HomePage)
  },
})
