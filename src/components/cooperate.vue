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
                                    {{
                                        Array.isArray(farm.products) && farm.products.length > 0
                                            ? farm.products.join(', ')
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
import farmsData from '../data/farms.js' // 改為 default 匯入

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
    return '../public/farms/farm.jpg'
}
</script>

<style scoped>
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

/* ⭐ 調整這裡 */
.farm-section {
    width: 100%;
    max-width: 1200px;
    margin: 180px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.farm-section h2 {
    color: #5d4037;
    font-size: 28px;
    margin-bottom: 20px;
    border-bottom: 2px solid #a5d6a7;
    padding-bottom: 10px;
    width: fit-content;
}

.farm-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
}

.farm-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    background-color: #e8f5e9;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.farm-item:hover {
    transform: scale(1.05);
}

.farm-content {
    display: flex;
    gap: 15px;
    align-items: center;
    width: 100%;
}

.farm-logo-container {
    flex: 0 0 auto;
}

.farm-logo {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.farm-info {
    flex: 1;
    text-align: left;
}

.farm-name {
    font-size: 18px;
    color: #5d4037;
    font-weight: bold;
    margin-bottom: 10px;
}

.farm-detail {
    font-size: 14px;
    color: #5d4037;
    margin: 5px 0;
}

.label {
    font-weight: bold;
    color: #4caf50;
}

.no-data {
    font-size: 16px;
    color: #5d4037;
    margin-top: 20px;
}
</style>
