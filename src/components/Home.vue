<template>
    <div class="page-wrapper">
        <!-- 頁面頂部導航欄 -->
        <Header />

        <!-- 幻燈片 -->
        <Slideshow />

        <!-- 主要內容 -->
        <main class="main-content">
            <!-- 成立宗旨 -->
            <section class="article-section">
                <h2 class="article-title">成立宗旨</h2>
                <div class="article-divider"></div>
                <p class="article-description">
                    大武有機生產合作社秉持著以下理念，致力推動有機農業的永續發展：
                    <br />
                    <br />
                    -
                    <strong>友善環境</strong>
                    ：守護土地與生態環境，減少化學物質使用。
                    <br />
                    -
                    <strong>健康生活</strong>
                    ：提供消費者健康無毒的農產品。
                    <br />
                    -
                    <strong>在地共好</strong>
                    ：實現農業與社區的共生共榮。
                    <br />
                    <br />
                    透過整合在地有機農友資源、建立安全溯源的農產品通路，我們希望成為農友互助的平台，同時串聯生產與消費、農村與都市之間的重要橋樑。透過教育推廣、資源共享與市場拓展，期望為有機農業注入活力，創造一個公平、永續且充滿希望的未來。
                </p>
            </section>

            <!-- 景點特色 -->
            <!-- <section class="article-section">
                <h2 class="article-title">景點特色</h2>
                <div class="article-divider"></div>
                <p class="article-description">這裡是文章描述的簡介</p> -->

            <!-- 可下拉文章區塊 -->
            <!-- <div class="article-list">
                    <details class="article-item">
                        <summary class="article-item-title">
                            <span class="icon">🚌</span>
                            交通資訊
                        </summary>
                        <div class="article-content">
                            <h3>自行開車:</h3>
                            <p>根據需求自行填寫</p>
                        </div>
                        <div class="article-content">
                            <h3>大眾運輸:</h3>
                            <p>根據需求自行填寫</p>
                        </div>
                    </details>-->

            <!-- 附近交通資訊 -->
            <!-- <details class="article-item">
                        <summary class="article-item-title">
                            <span class="icon">🚗</span>
                            附近交通資訊
                        </summary>
                        <div class="article-content">
                            <p>例如:某某公車站(距離3.5公里)</p>
                        </div>
                    </details>
                </div>
            </section> -->
        </main>

        <!-- 頁尾 -->
        <Footer />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Footer from '../modules/Footer.vue'
import Header from '../modules/Header.vue'
import Slideshow from '../modules/Slideshow.vue'

// 初始化路由
const router = useRouter()
</script>

<style scoped>
@import '../assets/css/main.css';

/* 整體頁面佈局 */
.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* 主要內容 */
.main-content {
    flex: 1;
    background-color: #e5ffc7;
    padding: clamp(1rem, 2.5vw, 2.5rem) clamp(1rem, 2vw, 1.25rem);
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 文章區域 */
.article-section {
    width: 100%;
    max-width: 1200px; /* 與商品頁和會員名冊頁一致 */
    margin: clamp(1.5rem, 3vw, 3rem) 0;
    padding: clamp(1rem, 2vw, 1.25rem);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

/* 文章標題 */
.article-title {
    font-size: clamp(1.5rem, 2.5vw, 1.75rem);
    font-weight: 700;
    color: #4a3c31;
    margin-bottom: clamp(0.75rem, 1.5vw, 0.9375rem);
    text-align: center;
}

/* 文章標題下的分隔線 */
.article-divider {
    width: clamp(2.5rem, 5vw, 3.75rem);
    height: 4px;
    background-color: #ff6b6b;
    margin: 0 auto clamp(1rem, 2vw, 1.5625rem);
    border-radius: 2px;
}

/* 文章描述 */
.article-description {
    font-size: clamp(0.875rem, 1.5vw, 1rem);
    color: #5d4037;
    line-height: 1.8;
    text-align: justify;
    margin-bottom: clamp(1.5rem, 3vw, 1.875rem);
}

/* 文章列表 */
.article-list {
    display: flex;
    flex-direction: column;
    gap: clamp(0.75rem, 1.5vw, 0.9375rem);
}

/* 單個文章區塊 */
.article-item {
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.3s ease;
}

/* 文章區塊標題 */
.article-item-title {
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    font-weight: 600;
    color: #4a3c31;
    padding: clamp(0.75rem, 1.5vw, 0.9375rem) clamp(1rem, 2vw, 1.25rem);
    display: flex;
    align-items: center;
    gap: clamp(0.5rem, 1vw, 0.625rem);
    background-color: #f5f5f5;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.article-item-title:hover {
    background-color: #ececec;
}

/* 圖標樣式 */
.icon {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
}

/* 文章內容 */
.article-content {
    padding: clamp(1rem, 2vw, 1.25rem);
    font-size: clamp(0.75rem, 1.2vw, 0.875rem);
    color: #5d4037;
    line-height: 1.8;
    background-color: #fafafa;
}

/* 移除 details 的預設箭頭 */
.article-item summary::-webkit-details-marker {
    display: none;
}

.article-item summary::after {
    content: '▼';
    font-size: clamp(0.75rem, 1vw, 0.875rem);
    margin-left: auto;
    transition: transform 0.3s ease;
}

/* 展開時旋轉箭頭 */
.article-item[open] summary::after {
    transform: rotate(180deg);
}

/* Slideshow 調整 */
:deep(.slideshow) {
    margin-top: clamp(7.5rem, 10vw, 11.25rem);
}

/* 響應式設計 */
@media (max-width: 1024px) {
    .article-section {
        max-width: 900px; /* 稍微縮減寬度 */
    }
}

@media (max-width: 768px) {
    .main-content {
        padding: 1rem;
    }
    .article-section {
        margin: 1.5rem 0;
        padding: 1rem;
    }
    .article-description {
        text-align: left; /* 小螢幕上調整為左對齊 */
    }
}

@media (max-width: 480px) {
    .article-title {
        font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    }
    .article-description {
        font-size: clamp(0.75rem, 1.5vw, 0.875rem);
    }
    .article-divider {
        width: clamp(2rem, 4vw, 2.5rem);
    }
    :deep(.slideshow) {
        margin-top: 5rem;
    }
}
</style>
