---
title: 猫叔感悟
description: 记录我的AI学习感悟与思考
---

<ClientOnly>
  <ThoughtsGrid />
</ClientOnly>

<style scoped>
.thoughts-container {
  padding: 20px;
}

.thoughts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 0 auto;
  max-width: 1200px;
}

.thought-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.thought-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.thought-cover {
  width: 100%;
  padding-top: 75%; 
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
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
  color: #333;
  line-height: 1.4;
}

.thought-content p {
  margin: 0 0 12px;
  font-size: 0.9em;
  color: #666;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.thought-date {
  font-size: 0.8em;
  color: #999;
  display: block;
  margin-top: auto;
}

@media (max-width: 768px) {
  .thoughts-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    padding: 10px;
  }
  
  .thought-content h3 {
    font-size: 1.1em;
  }
  
  .thought-content p {
    font-size: 0.85em;
  }
}
</style>
