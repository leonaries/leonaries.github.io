import { defineClientConfig } from '@vuepress/client'
import ThoughtsGrid from './components/ThoughtsGrid.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ThoughtsGrid', ThoughtsGrid)
  },
})
