<template>
    <div class="home">
        <!-- 導航欄：包含 Logo 和導航連結 -->
        <Header />

        <!-- 關於我們區域 -->
        <section class="about-section">
            <!-- 圖片和描述區域 -->
            <div class="about-content" v-for="(item, index) in aboutData" :key="index">
                <!-- 標題 -->
                <h2 class="content-title">{{ item.title }}</h2>
                <!-- 圖片和描述並排容器 -->
                <div class="content-row">
                    <!-- 圖片展示區域 -->
                    <div class="image-gallery">
                        <img :src="item.image" alt="農夫照片" class="about-image" />
                    </div>
                    <!-- 描述文字 -->
                    <p class="about-description">{{ item.description }}</p>
                </div>
            </div>

            <!-- 文章區域 -->
            <div class="article-section">
                <details class="article-item" v-for="(item, index) in aboutData" :key="index">
                    <summary class="article-item-title">
                        <span class="icon">📜</span>
                        {{ item.title }}
                    </summary>
                    <div class="article-content">
                        {{ item.description }}
                    </div>
                </details>
            </div>
        </section>

        <!-- 頁面底部頁腳 -->
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // 導入 Vue Router 的 useRouter
import Footer from '../modules/Footer.vue' // 導入 Footer 組件
import Header from '../modules/Header.vue'
import { aboutData } from '../data/aboutData.js' // 導入 JS 檔案

// 初始化路由
const router = useRouter()

// 將 JS 資料存入 ref 以便在模板中使用
const aboutDataRef = ref(aboutData)
</script>

<style scoped>
@import '../assets/css/main.css';
/* 整體容器樣式 */
.home {
    background-color: #e5ffc7; /* 淺灰色背景，符合參考畫面 */
    min-height: 100vh; /* 確保頁面至少填滿視窗高度 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 內容居中對齊 */
}

/* 關於我們區域樣式 */
.about-section {
    width: 100%;
    max-width: 1200px; /* 與其他區域對齊 */
    margin: 180px 0 40px; /* 調整上邊距，避免被固定 Header 覆蓋 */
    padding: 0 20px;
}

/* 標題和 Logo 區域 */
.about-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.about-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
}

.about-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
}

/* 圖片和描述區域 */
.about-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
    background-color: #e8f5e9; /* 淺綠色背景，接近自然 */
    border: 1px solid #c8e6c9; /* 淺綠色邊框 */
    border-radius: 10px; /* 圓角 */
    padding: 20px; /* 內邊距，讓內容有呼吸空間 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 輕微陰影，增加層次感 */
}

/* 區塊標題 */
.content-title {
    font-size: 22px;
    font-weight: bold;
    color: #4caf50; /* 深綠色標題，符合自然主題 */
    margin-bottom: 15px;
}

/* 圖片和描述並排容器 */
.content-row {
    display: flex;
    gap: 20px; /* 圖片和描述之間的間距 */
    align-items: flex-start; /* 圖片和描述頂部對齊 */
}

/* 圖片展示區域 */
.image-gallery {
    flex: 0 0 auto; /* 圖片區域不自動縮放 */
}

.about-image {
    width: 200px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
}

.about-description {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    flex: 1; /* 描述文字佔據剩餘空間 */
}

/* 文章區域樣式 */
.article-section {
    width: 100%;
}

/* 單個文章區塊 */
.article-item {
    background-color: #fff; /* 白色背景 */
    border: 1px solid #ddd; /* 邊框 */
    border-radius: 5px; /* 圓角 */
}

/* 文章區塊標題 */
.article-item-title {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 10px; /* 圖標和文字之間的間距 */
    cursor: pointer;
}

/* 圖標樣式 */
.icon {
    font-size: 20px;
}

/* 文章內容 */
.article-content {
    padding: 15px;
    font-size: 14px;
    color: #333;
    line-height: 1.6;
}

/* 移除 details 的預設箭頭 */
.article-item summary::-webkit-details-marker {
    display: none;
}

.article-item summary::after {
    content: '▼';
    font-size: 12px;
    margin-left: auto;
}

/* 展開時旋轉箭頭 */
.article-item[open] summary::after {
    content: '▲';
}
</style>
