<template>
    <div class="page-wrapper">
        <!-- 頁面頂部導航欄 -->
        <Header />

        <!-- 主要內容 -->
        <main class="main-content">
            <!-- 合作農場展示區 -->
            <section class="farm-section">
                <h2>我們的合作農場</h2>
                <div v-if="farmList && farmList.length" class="farm-list">
                    <div
                        v-for="farm in farmList"
                        :key="farm.id"
                        class="farm-item"
                        @click="goToFarmPage(farm)"
                    >
                        <!-- 農場資訊並排容器 -->
                        <div class="farm-content">
                            <!-- 左邊：農場 Logo -->
                            <div class="farm-logo-container">
                                <img
                                    :src="getFarmLogo(farm)"
                                    :alt="farm.name || '無名稱'"
                                    class="farm-logo"
                                />
                            </div>
                            <!-- 右邊：農場資訊 -->
                            <div class="farm-info">
                                <h3 class="farm-name">{{ farm.name || '未提供農場名稱' }}</h3>
                                <p class="farm-detail">
                                    <span class="label">聯絡人:</span>
                                    {{ farm.contactPerson || '未提供' }}
                                </p>
                                <p class="farm-detail">
                                    <span class="label">電話:</span>
                                    {{ farm.phone || '未提供' }}
                                </p>
                                <p class="farm-detail">
                                    <span class="label">地址:</span>
                                    {{ farm.address || '未提供' }}
                                </p>
                                <p class="farm-detail">
                                    <span class="label">產品:</span>
                                    <!-- 修正產品顯示邏輯 -->
                                    {{
                                        Array.isArray(farm.products) && farm.products.length > 0
                                            ? farm.products
                                                  .map((product) => product.products_name)
                                                  .join(', ')
                                            : '未提供'
                                    }}
                                </p>
                                <p class="farm-detail">
                                    <span class="label">有機認證:</span>
                                    {{ farm.isOrganic ? '是' : '否' }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="no-data">暫無農場資料</div>
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
import farmsData from '../data/farms.js'

// 初始化路由
const router = useRouter()

// 使用另一個名稱避免變數衝突
const farmList = ref(Array.isArray(farmsData) ? farmsData : [])

// 點擊農場時跳轉到對應頁面
const goToFarmPage = (farm) => {
    if (farm.website) {
        window.open(farm.website, '_blank')
    } else {
        console.log(`無網站可跳轉：${farm.name || '未提供名稱'}`)
    }
}

// 處理農場 Logo，當無 Logo 時使用佔位圖片
const getFarmLogo = (farm) => {
    return farm.logo || '../dist/farms/products/Stay_tuned.jpg'
}
</script>

<style scoped>
@import '../assets/css/main.css';
.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex: 1;
    background-color: #e5ffc7;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.farm-section {
    width: 100%;
    max-width: 1200px;
    margin: 180px 0 20px; /* 與商品頁一致，考慮固定 Header */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.farm-section h2 {
    color: #5d4037;
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    margin-bottom: 1.25rem;
    border-bottom: 2px solid #a5d6a7;
    padding-bottom: 0.625rem;
    font-family: 'Georgia', 'Noto Serif TC', serif;
    width: fit-content;
}

.farm-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 與商品頁一致，實現並排 */
    gap: 20px;
    justify-items: center;
}

.farm-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 350px; /* 與商品頁的 fruit-item 一致 */
    background-color: #e8f5e9;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex: 1;
    background-color: #e5ffc7;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.farm-section {
    width: 100%;
    max-width: 1200px;
    margin: 150px auto 1rem; /* 與商品頁一致，考慮固定 Header */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.farm-section h2 {
    color: #5d4037;
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    margin-bottom: 1.25rem;
    border-bottom: 2px solid #a5d6a7;
    padding-bottom: 0.625rem;
    font-family: 'Georgia', 'Noto Serif TC', serif;
    width: fit-content;
}

.farm-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.farm-content {
    display: flex;
    gap: 15px;
    align-items: center;
    width: 100%;
}

.farm-logo-container {
    flex: 0 0 33.33%; /* 與商品頁一致 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.farm-logo {
    width: clamp(80px, 25vw, 100px); /* 與商品頁一致 */
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.farm-info {
    flex: 0 0 66.67%; /* 與商品頁一致 */
    text-align: left;
}

.farm-name {
    font-size: clamp(1rem, 2vw, 1.125rem); /* 與商品頁一致 */
    color: #5d4037;
    font-weight: bold;
    margin-bottom: 0.625rem;
}

.farm-detail {
    font-size: clamp(0.75rem, 1.5vw, 0.875rem); /* 與商品頁一致 */
    color: #5d4037;
    margin: 0.3125rem 0;
}

.label {
    font-weight: bold;
    color: #4caf50;
}

.no-data {
    font-size: clamp(0.875rem, 2vw, 1rem); /* 與商品頁的 no-results 一致 */
    color: #5d4037;
    margin-top: 1.25rem;
}

/* 響應式設計 */
@media (max-width: 1024px) {
    .farm-list {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 切換為自適應 */
    }
}

@media (max-width: 768px) {
    .main-content {
        padding: 1rem;
    }
    .farm-section {
        margin: 120px auto 1rem; /* 與商品頁一致 */
    }
    .farm-content {
        flex-direction: column; /* 與商品頁一致，切換為單列 */
        align-items: flex-start;
    }
    .farm-logo-container,
    .farm-info {
        flex: 0 0 100%; /* 與商品頁一致 */
        text-align: center;
    }
    .farm-logo {
        width: clamp(60px, 20vw, 80px); /* 與商品頁一致 */
    }
}

@media (max-width: 480px) {
    .farm-section h2 {
        font-size: clamp(1.25rem, 2.5vw, 1.5rem); /* 與商品頁一致 */
    }
    .farm-name {
        font-size: 0.875rem; /* 與商品頁一致 */
    }
    .farm-detail,
    .no-data {
        font-size: 0.75rem; /* 與商品頁一致 */
    }
}
</style>
