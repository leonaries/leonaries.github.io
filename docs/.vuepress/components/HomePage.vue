<template>
  <div class="home-page">
    <!-- 背景视频 -->
    <video class="background-video" autoplay loop muted playsinline>
      <source :src="withBase('/videos/background.mp4')" type="video/mp4">
    </video>
    
    <!-- 遮罩层 -->
    <div class="overlay"></div>

    <!-- 主要内容 -->
    <div class="content">
      <!-- 头像和标题 -->
      <div class="hero">
        <h1 class="title">AI 猫叔</h1>
        <p class="tagline">像猫一样，不断拓展自己对AI的认知边界</p>
      </div>

      <!-- 特性卡片 -->
      <div class="features">
        <div class="feature-card">
          <h2>猫叔推荐</h2>
          <p>分享AI工具使用心得，助你快速掌握AI技术</p>
        </div>
        <div class="feature-card">
          <h2>AI资讯</h2>
          <p>及时更新AI领域最新动态，深度解读行业趋势</p>
        </div>
        <div class="feature-card">
          <h2>AI工具</h2>
          <p>精选各类AI工具，包括大语言模型、文本生成、图像生成等</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { withBase } from '@vuepress/client'

export default {
  name: 'HomePage',
  setup() {
    return {
      withBase
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 2rem 2rem;
  overflow-x: hidden;
}

// 背景视频
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
}

// 遮罩层
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  z-index: -1;
}

// 主要内容
.content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
}

// 头像和标题区域
.hero {
  text-align: center;
  margin-bottom: 4rem;

  .title {
    font-size: 3rem;
    color: #2c3e50;
    margin: 0.5rem 0;
  }

  .tagline {
    font-size: 1.5rem;
    color: #476582;
    margin: 1rem 0;
  }
}

// 特性卡片
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.feature-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    padding: 0;
  }

  p {
    color: #476582;
    margin: 0;
    line-height: 1.6;
  }
}

// 响应式设计
@media (max-width: 719px) {
  .home-page {
    padding: 4rem 1.5rem 1.5rem;
  }

  .hero {
    .title {
      font-size: 2.5rem;
    }

    .tagline {
      font-size: 1.2rem;
    }
  }

  .features {
    grid-template-columns: 1fr;
  }
}
</style>
