<template>
  <div class="thoughts-container">
    <div v-if="thoughts.length === 0" class="no-thoughts">
      暂无文章
    </div>
    <div v-else class="thoughts-grid">
      <div v-for="thought in thoughts" 
           :key="thought.title" 
           class="thought-card"
           @click="openLink(thought.link)">
        <div class="thought-cover">
          <img :src="thought.cover" :alt="thought.title">
        </div>
        <div class="thought-content">
          <h3>{{ thought.title }}</h3>
          <p>{{ thought.description }}</p>
          <div class="thought-footer">
            <span class="thought-date">{{ thought.date }}</span>
            <div class="thought-tags">
              <span v-for="tag in thought.tags" 
                    :key="tag" 
                    class="thought-tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSiteData } from '@vuepress/client'

const thoughts = ref([])
const router = useRouter()
const siteData = useSiteData()

onMounted(() => {
  // 获取所有thoughts目录下的页面
  const routes = router.getRoutes()
  console.log('Site data:', siteData.value)
  console.log('All routes:', routes.map(r => ({ 
    path: r.path,
    meta: r.meta
  })))
  
  thoughts.value = routes
    .filter(route => {
      const isValid = route.path.startsWith('/thoughts/') && 
             route.path !== '/thoughts/' &&
             route.path.endsWith('.html') &&
             !route.path.endsWith('/index.html') &&
             !route.path.endsWith('README.html')
      console.log('Route:', route.path, 'isValid:', isValid, 'meta:', route.meta)
      return isValid
    })
    .map(route => {
      const frontmatter = route.meta?.frontmatter || {}
      console.log('Processing route:', {
        path: route.path,
        meta: route.meta,
        frontmatter: {
          title: frontmatter.title,
          description: frontmatter.description,
          date: frontmatter.date,
          tags: frontmatter.tags,
          cover: frontmatter.cover
        }
      })
      return {
        title: frontmatter.title || route.meta?.title || '无标题',
        description: frontmatter.description || '暂无描述',
        cover: frontmatter.cover || '/images/uncle-cat-1.png',
        link: route.path.replace(/\.html$/, ''),
        date: frontmatter.date || new Date().toISOString().split('T')[0],
        tags: frontmatter.tags || []
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  console.log('Final processed thoughts:', thoughts.value)
})

const openLink = (url) => {
  if (url.startsWith('http')) {
    window.open(url, '_blank')
  } else {
    window.location.href = url
  }
}
</script>

<style scoped>
.thoughts-container {
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
}

.no-thoughts {
  text-align: center;
  padding: 40px;
  color: var(--c-text-lighter);
  font-size: 1.2em;
}

.thoughts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.thought-card {
  background: var(--c-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid var(--c-border);
}

.thought-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.thought-cover {
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  overflow: hidden;
  background: var(--c-bg-lighter);
}

.thought-cover img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.thought-card:hover .thought-cover img {
  transform: scale(1.05);
}

.thought-content {
  padding: 16px;
}

.thought-content h3 {
  margin: 0 0 8px;
  font-size: 1.2em;
  color: var(--c-text);
  line-height: 1.4;
}

.thought-content p {
  margin: 0 0 12px;
  font-size: 0.9em;
  color: var(--c-text-lighter);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.thought-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.thought-date {
  font-size: 0.8em;
  color: var(--c-text-lightest);
}

.thought-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.thought-tag {
  font-size: 0.8em;
  padding: 2px 8px;
  border-radius: 12px;
  background: var(--c-bg-lighter);
  color: var(--c-text-lighter);
}

@media (max-width: 768px) {
  .thoughts-container {
    padding: 15px;
  }

  .thoughts-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }
  
  .thought-content h3 {
    font-size: 1.1em;
  }
  
  .thought-content p {
    font-size: 0.85em;
  }
}
</style>
