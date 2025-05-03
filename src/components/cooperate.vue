<template>
    <div class="page-wrapper">
        <!-- 頁面頂部導航欄 -->
        <Header />

        <!-- 主要內容 -->
        <main class="main-content">
            <!-- 合作農場展示區 -->
            <section class="farm-section">
                <h2>我們的合作農場</h2>
                <div class="farm-list">
                    <div
                        v-for="(farm, index) in farms"
                        :key="index"
                        class="farm-item"
                        @click="goToFarmPage(index)"
                    >
                        <!-- 農場資訊並排容器 -->
                        <div class="farm-content">
                            <!-- 左邊：農場 Logo -->
                            <div class="farm-logo-container">
                                <img :src="farm.logo" :alt="farm.name" class="farm-logo" />
                            </div>
                            <!-- 右邊：農場資訊 -->
                            <div class="farm-info">
                                <h3 class="farm-name">{{ farm.name }}</h3>
                                <p class="farm-detail">
                                    <span class="label">地址:</span>
                                    {{ farm.address }}
                                </p>
                                <p class="farm-detail">
                                    <span class="label">電話:</span>
                                    {{ farm.telephone }}
                                </p>
                                <p class="farm-detail">
                                    <span class="label">日期:</span>
                                    {{ farm.date }}
                                </p>
                                <p class="farm-detail">
                                    <span class="label">時間:</span>
                                    {{ farm.time }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- 頁面底部頁腳 -->
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../modules/Header.vue'
import Footer from '../modules/Footer.vue'
import { farmsData } from '../data/farms.js' // 導入農場數據

// 初始化路由
const router = useRouter()

// 農場數據，使用外部導入的數據
const farms = ref(farmsData)

// 點擊農場時跳轉到對應頁面
const goToFarmPage = (index) => {
    router.push(farms.value[index].link)
}
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

/* 農場展示區樣式 */
.farm-section {
    width: 100%;
    max-width: 1200px;
    margin: 180px 0 20px; /* 調整上邊距，避免被固定 Header 覆蓋 */
    text-align: center;
}

.farm-section h2 {
    color: #5d4037;
    font-size: 28px;
    margin-bottom: 20px;
}

/* 農場列表佈局 */
.farm-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 每行 3 個農場 */
    gap: 20px;
    justify-items: center;
}

/* 單個農場項樣式 */
.farm-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    background-color: #e8f5e9;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.farm-item:hover {
    transform: scale(1.05);
}

/* 農場內容並排容器 */
.farm-content {
    display: flex;
    gap: 15px;
    align-items: center;
    width: 100%;
}

/* 農場 Logo 容器 */
.farm-logo-container {
    flex: 0 0 auto;
}

/* 農場 Logo 樣式 */
.farm-logo {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 農場資訊容器 */
.farm-info {
    flex: 1;
    text-align: left;
}

/* 農場名稱樣式 */
.farm-name {
    font-size: 18px;
    color: #5d4037;
    font-weight: bold;
    margin-bottom: 10px;
}

/* 農場詳細資訊樣式 */
.farm-detail {
    font-size: 14px;
    color: #5d4037;
    margin: 5px 0;
}

/* 標籤樣式（例如 "地址:"） */
.label {
    font-weight: bold;
    color: #4caf50;
}
</style>
