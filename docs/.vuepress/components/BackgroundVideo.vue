<template>
  <div class="video-container">
    <video
      class="background-video"
      autoplay
      loop
      muted
      playsinline
    >
      <source :src="videoSrc" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'BackgroundVideo',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    videoSrc() {
      return this.src.startsWith('http') ? this.src : this.$withBase(this.src)
    }
  }
}
</script>

<style scoped>
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
