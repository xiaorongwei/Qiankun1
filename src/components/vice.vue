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
                    <!-- 描述文字，分段顯示 -->
                    <div class="about-description">
                        <p
                            v-for="(paragraph, pIndex) in item.description"
                            :key="pIndex"
                            class="paragraph"
                        >
                            {{ `　　${paragraph}` }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- 文章區域 -->
            <!-- <div class="article-section">
                <details class="article-item" v-for="(item, index) in aboutData" :key="index">
                    <summary class="article-item-title">
                        <span class="icon">📜</span>
                        {{ item.title }}
                    </summary>
                    <div class="article-content">
                        <p
                            v-for="(paragraph, pIndex) in item.description"
                            :key="pIndex"
                            class="paragraph"
                        >
                            {{ `　　${paragraph}` }}
                        </p>
                    </div>
                </details>
            </div> -->
        </section>

        <!-- 頁面底部頁腳 -->
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '../modules/Footer.vue'
import Header from '../modules/Header.vue'
import { aboutData } from '../data/aboutData.js'

// 初始化路由
const router = useRouter()

// 將 JS 資料存入 ref 以便在模板中使用
const aboutDataRef = ref(aboutData)
</script>

<style scoped>
@import '../assets/css/main.css';
/* 整體容器樣式 */
.home {
    background-color: #e5ffc7;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 關於我們區域樣式 */
.about-section {
    width: 100%;
    max-width: 1200px;
    margin: 180px 0 40px;
    padding: 0 20px;
}

/* 圖片和描述區域 */
.about-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
    background-color: #e8f5e9;
    border: 1px solid #c8e6c9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 區塊標題 */
.content-title {
    font-size: 22px;
    font-weight: bold;
    color: #4caf50;
    margin-bottom: 15px;
}

/* 圖片和描述並排容器 */
.content-row {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

/* 圖片展示區域 */
.image-gallery {
    flex: 0 0 auto;
}

.about-image {
    width: 200px;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
}

/* 描述文字 */
.about-description {
    flex: 1;
}

.paragraph {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 15px; /* 段落間距 */
}

.paragraph:last-child {
    margin-bottom: 0; /* 最後一段無下邊距 */
}

/* 文章區域樣式 */
.article-section {
    width: 100%;
}

/* 單個文章區塊 */
.article-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}

/* 文章區塊標題 */
.article-item-title {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

/* 圖標樣式 */
.icon {
    font-size: 20px;
}

/* 文章內容 */
.article-content {
    padding: 15px;
}

.article-content .paragraph {
    font-size: 14px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 15px;
}

.article-content .paragraph:last-child {
    margin-bottom: 0;
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
