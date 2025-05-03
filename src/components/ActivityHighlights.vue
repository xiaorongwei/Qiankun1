<template>
    <div class="page-wrapper">
        <!-- 頁面頂部導航欄 -->
        <Header />

        <!-- 主要內容 -->
        <main class="main-content">
            <!-- 活動花絮區域 -->
            <section class="activity-section">
                <h2 class="activity-title">活動花絮</h2>
                <div class="activity-divider"></div>
                <p class="activity-description">點擊下方標題，查看各活動的精彩照片！</p>

                <!-- 活動列表 -->
                <div class="activity-list">
                    <!-- 使用 v-for 動態渲染活動 -->
                    <details
                        v-for="activity in activities"
                        :key="activity.id"
                        class="activity-item"
                    >
                        <summary class="activity-item-title">
                            <span class="icon">{{ activity.icon }}</span>
                            {{ activity.title }}
                        </summary>
                        <div class="activity-content">
                            <div class="photo-gallery">
                                <!-- 動態渲染每張照片 -->
                                <img
                                    v-for="(photo, index) in activity.photos"
                                    :key="index"
                                    :src="photo.src"
                                    :alt="photo.alt"
                                    class="activity-photo"
                                />
                            </div>
                        </div>
                    </details>
                </div>
            </section>
        </main>

        <!-- 頁面底部頁腳 -->
        <Footer />
    </div>
</template>

<script setup>
import Header from '../modules/Header.vue'
import Footer from '../modules/Footer.vue'
import activities from '../data/activitiesimg.js' // 引入活動資料

// 直接使用引入的活動資料
</script>

<style scoped>
/* 整體頁面佈局 */
.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* 確保頁面至少填滿視窗高度 */
}

/* 主要內容 */
.main-content {
    flex: 1; /* 讓主要內容佔據剩餘空間，推動 footer 到底部 */
    background-color: #e5ffc7; /* 與之前的背景色一致 */
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 活動花絮區域樣式 */
.activity-section {
    width: 100%;
    max-width: 1200px; /* 與其他區域對齊 */
    margin: 180px 0 20px; /* 調整上邊距，避免被固定 Header 覆蓋 */
    text-align: center;
}

/* 活動標題 */
.activity-title {
    font-size: 28px;
    font-weight: bold;
    color: #5d4037; /* 深棕色，與之前的風格一致 */
    margin-bottom: 10px;
    font-family: 'Georgia', serif;
}

/* 活動標題下的分隔線 */
.activity-divider {
    width: 50px;
    height: 3px;
    background-color: #4caf50; /* 深綠色分隔線，符合自然主題 */
    margin: 0 auto 20px;
}

/* 活動描述 */
.activity-description {
    font-size: 16px;
    color: #5d4037;
    line-height: 1.6;
    margin-bottom: 30px;
    font-family: 'Georgia', serif;
}

/* 活動列表 */
.activity-list {
    display: flex;
    flex-direction: column;
    gap: 15px; /* 每個活動區塊之間的間距 */
}

/* 單個活動區塊 */
.activity-item {
    background-color: #e8f5e9; /* 淺綠色背景，與之前的風格一致 */
    border: 1px solid #81c784; /* 淺綠色邊框 */
    border-radius: 10px; /* 圓角 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 柔和陰影 */
    transition: all 0.3s ease;
}

.activity-item:hover {
    transform: scale(1.02); /* 懸停時輕微放大 */
}

/* 活動區塊標題 */
.activity-item-title {
    font-size: 20px;
    font-weight: bold;
    color: #2e7d32; /* 深綠色文字 */
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 10px; /* 圖標和文字之間的間距 */
    cursor: pointer;
    font-family: 'Georgia', serif;
}

/* 圖標樣式 */
.icon {
    font-size: 24px;
}

/* 活動內容 */
.activity-content {
    padding: 20px;
}

/* 照片畫廊 */
.photo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 自適應佈局 */
    gap: 15px;
}

/* 活動照片 */
.activity-photo {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.activity-photo:hover {
    transform: scale(1.05); /* 懸停時放大照片 */
}

/* 移除 details 的預設箭頭（可選） */
.activity-item summary::-webkit-details-marker {
    display: none;
}

.activity-item summary::after {
    content: '▼';
    font-size: 14px;
    color: #4caf50;
    margin-left: auto;
}

/* 展開時旋轉箭頭 */
.activity-item[open] summary::after {
    content: '▲';
}

/* 響應式設計 */
@media (max-width: 768px) {
    .activity-section {
        margin: 150px 0 20px; /* 小螢幕時調整上邊距 */
        padding: 0 15px;
    }

    .activity-title {
        font-size: 24px;
    }

    .activity-item-title {
        font-size: 18px;
    }

    .activity-photo {
        height: 150px;
    }
}
</style>
