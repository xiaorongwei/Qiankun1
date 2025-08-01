<template>
    <!-- 幻燈片區域 -->
    <div class="slideshow">
        <!-- 幻燈片圖片容器 -->
        <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <!-- 使用 v-for 動態渲染每張幻燈片 -->
            <div v-for="(slide, index) in slides" :key="index" class="slide">
                <!-- 正確綁定圖片路徑 -->
                <img :src="slide.img" class="slide-image" alt="幻燈片圖片" />
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

// 幻燈片型別
interface Slide {
    img: string
}

// 使用原始 slideshow 陣列，不做 map
const slides: Ref<Slide[]> = ref(slideshow)

// 當前顯示的幻燈片索引
const currentSlide: Ref<number> = ref(0)

// 定時器
const slideInterval: Ref<NodeJS.Timeout | null> = ref(null)

// 切換到下一張
const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

// 切換到上一張
const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
}

// 自動輪播
const startSlideShow = () => {
    if (!slideInterval.value) {
        slideInterval.value = setInterval(nextSlide, 5000)
    }
}

// 停止自動輪播
const stopSlideShow = () => {
    if (slideInterval.value) {
        clearInterval(slideInterval.value)
        slideInterval.value = null
    }
}

// 掛載與卸載時
onMounted(startSlideShow)
onUnmounted(stopSlideShow)
</script>

<style scoped>
/* 全寬幻燈片容器 */
.slideshow {
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: 400px;
    display: flex;
    justify-content: center;
}

/* 幻燈片內容橫向排列 */
.slides {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
}

/* 每張幻燈片 */
.slide {
    width: 100%;
    height: 500px;
    flex-shrink: 0;
    position: relative;
}

/* 圖片樣式 */
.slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

/* 左右切換按鈕 */
.slide-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 3;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}
@media (max-width: 1024px) {
    .slide {
        height: 400px;
    }
}

@media (max-width: 768px) {
    .slide {
        height: 300px;
    }

    .slide-btn {
        padding: 8px;
        font-size: 20px;
    }
}

@media (max-width: 480px) {
    .slide {
        height: 200px;
    }

    .slide-btn {
        padding: 6px;
        font-size: 16px;
    }
}
</style>
