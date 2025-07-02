<template>
    <!-- 幻燈片區域 -->
    <div class="slideshow">
        <!-- 幻燈片圖片容器，使用 transform 實現滑動效果 -->
        <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <!-- 使用 v-for 動態渲染每張幻燈片 -->
            <div v-for="(slide, index) in slides" :key="index" class="slide">
                <!-- 顯示圖片，:src 綁定圖片路徑 -->
                <img :src="slide" class="slide-image" alt="幻燈片圖片" />
            </div>
        </div>
        <!-- 左右切換按鈕 -->
        <button @click="prevSlide" class="slide-btn prev">❮</button>
        <button @click="nextSlide" class="slide-btn next">❯</button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

// 引入幻燈片資料
import { slideshow } from '../data/slideshow'

// 定義幻燈片資料的類型
interface Slide {
    img: string
}

// 確保 slideshow 資料符合類型
const slides: Ref<string[]> = ref(
    slideshow.map((slide: Slide) => {
        return slide.img
    })
)

// 當前顯示的幻燈片索引
const currentSlide: Ref<number> = ref(0)

// 定時器引用，用於控制自動播放
const slideInterval: Ref<NodeJS.Timeout | null> = ref(null)

// 切換到下一張幻燈片
const nextSlide = (): void => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

// 切換到上一張幻燈片
const prevSlide = (): void => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

// 啟動自動播放，每 5 秒切換一次
const startSlideShow = (): void => {
    if (!slideInterval.value) {
        slideInterval.value = setInterval(() => {
            nextSlide()
        }, 5000)
    }
}

// 停止自動播放，清理定時器
const stopSlideShow = (): void => {
    if (slideInterval.value) {
        clearInterval(slideInterval.value)
        slideInterval.value = null
    }
}

// 組件掛載時啟動自動播放
onMounted(() => {
    startSlideShow()
})

// 組件卸載時清理定時器，防止記憶體洩漏
onUnmounted(() => {
    stopSlideShow()
})
</script>

<style scoped>
/* 移除父容器的寬度限制，確保填滿 */
:deep(.page-wrapper) {
    width: 100%;
    margin: 0;
    padding: 0;
}

/* 幻燈片容器樣式 */
.slideshow {
    width: 100%; /* 填滿整個頁面寬度 */
    position: relative;
    overflow: hidden; /* 隱藏超出容器的內容 */
    margin: 0; /* 移除外邊距 */
    display: flex;
    justify-content: center; /* 水平居中內容 */
    min-height: 400px; /* 確保有最小高度 */
}

/* 幻燈片圖片容器，包含所有幻燈片 */
.slides {
    display: flex;
    transition: transform 0.5s ease; /* 滑動過渡動畫 */
    width: 100%; /* 確保寬度與父元素一致 */
}

/* 單張幻燈片樣式 */
.slide {
    width: 100%; /* 每張幻燈片寬度與容器一致 */
    height: 500px; /* 固定高度 */
    flex-shrink: 0; /* 防止圖片縮小 */
    position: relative;
}

/* 幻燈片圖片樣式 */
.slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 圖片按比例填充整個區域 */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

/* 幻燈片切換按鈕樣式 */
.slide-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%); /* 垂直居中 */
    background: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 3; /* 確保按鈕在圖片之上 */
}

/* 左按鈕位置 */
.prev {
    left: 10px;
}

/* 右按鈕位置 */
.next {
    right: 10px;
}
</style>
