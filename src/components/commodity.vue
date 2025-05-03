<template>
    <div class="page-wrapper">
        <!-- 頁面頂部導航欄 -->
        <Header />

        <!-- 主要內容 -->
        <main class="main-content">
            <!-- 合作蔬果展示區 -->
            <section class="fruit-section">
                <h2>商品頁</h2>
                <div class="fruit-list">
                    <div
                        v-for="(fruit, index) in fruits"
                        :key="index"
                        class="fruit-item"
                        @click="goToFruitPage(index)"
                    >
                        <!-- 蔬果資訊並排容器 -->
                        <div class="fruit-content">
                            <!-- 左邊：蔬果圖片 -->
                            <div class="fruit-logo-container">
                                <img :src="fruit.logo" :alt="fruit.name" class="fruit-logo" />
                            </div>
                            <!-- 右邊：蔬果資訊 -->
                            <div class="fruit-info">
                                <h3 class="fruit-name">{{ fruit.name }}</h3>
                                <p class="fruit-detail">
                                    <span class="label">農場:</span>
                                    {{ fruit.farm }}
                                </p>
                                <p class="fruit-detail">
                                    <span class="label">是否為有機:</span>
                                    {{ fruit.isOrganic ? '是' : '否' }}
                                </p>
                                <p class="fruit-detail">
                                    <span class="label">聯絡資訊:</span>
                                    {{ fruit.contact }}
                                </p>
                                <!-- <p class="fruit-detail fruit-price">
                                    <span class="label">價格:</span>
                                    NT${{ fruit.price }} / 公斤
                                </p> -->
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
import { fruitsData } from '../data/fruits' // 導入蔬果數據

// 初始化路由
const router = useRouter()

// 蔬果數據，使用外部導入的數據
const fruits = ref(fruitsData)

// // 點擊蔬果時跳轉到對應頁面
// const goToFruitPage = (index) => {
//     router.push(fruits.value[index].link)
// }
</script>

<style scoped>
@import '../assets/css/main.css';
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

/* 蔬果展示區樣式 */
.fruit-section {
    width: 100%;
    max-width: 1200px;
    margin: 180px 0 20px; /* 調整上邊距，避免被固定 Header 覆蓋 */
    text-align: center;
}

.fruit-section h2 {
    color: #5d4037;
    font-size: 28px;
    margin-bottom: 20px;
}

/* 蔬果列表佈局 */
.fruit-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
}

/* 單個蔬果項樣式 */
.fruit-item {
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

.fruit-item:hover {
    transform: scale(1.05);
}

/* 蔬果內容並排容器 */
.fruit-content {
    display: flex;
    gap: 15px;
    align-items: center;
    width: 100%;
}

/* 蔬果圖片容器 */
.fruit-logo-container {
    flex: 0 0 auto;
}

/* 蔬果圖片樣式 */
.fruit-logo {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 蔬果資訊容器 */
.fruit-info {
    flex: 1;
    text-align: left;
}

/* 蔬果名稱樣式 */
.fruit-name {
    font-size: 18px;
    color: #5d4037;
    font-weight: bold;
    margin-bottom: 10px;
}

/* 蔬果詳細資訊樣式 */
.fruit-detail {
    font-size: 14px;
    color: #5d4037;
    margin: 5px 0;
}

/* 價格樣式 */
.fruit-price {
    color: #d32f2f;
    font-weight: bold;
}

/* 標籤樣式（例如 "農場:"） */
.label {
    font-weight: bold;
    color: #4caf50;
}
</style>
