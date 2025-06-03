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
                        v-for="(productItem, index) in filteredProducts"
                        :key="index"
                        class="fruit-item"
                        @click="openModal(index)"
                    >
                        <!-- 產品資訊並排容器 -->
                        <div class="fruit-content">
                            <!-- 左邊：產品圖片 -->
                            <div class="fruit-logo-container">
                                <img
                                    :src="productItem.productLogo"
                                    :alt="productItem.productName"
                                    class="fruit-logo"
                                    @error="handleImageError"
                                />
                            </div>
                            <!-- 右邊：產品資訊 -->
                            <div class="fruit-info">
                                <h3 class="fruit-name">{{ productItem.productName }}</h3>
                                <p class="fruit-detail">
                                    <span class="label">農場:</span>
                                    {{ productItem.name || '未知農場' }}
                                </p>
                                <p class="fruit-detail">
                                    <span class="label">是否為有機:</span>
                                    {{ productItem.isOrganic ? '是' : '否' }}
                                </p>
                                <p class="fruit-detail">
                                    <span class="label">聯絡資訊:</span>
                                    {{ productItem.contactPerson }} {{ productItem.phone }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Modal 視窗 -->
        <div v-if="showModal" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <h2>{{ selectedProduct.productName }}</h2>
                <p class="modal-detail">
                    <span class="label">農場:</span>
                    {{ selectedProduct.name || '未知農場' }}
                </p>
                <p class="modal-detail">
                    <span class="label">聯絡人:</span>
                    {{ selectedProduct.contactPerson }}
                </p>
                <p class="modal-detail">
                    <span class="label">電話:</span>
                    {{ selectedProduct.phone || '無電話' }}
                </p>
                <p class="modal-detail">
                    <span class="label">地址:</span>
                    {{ selectedProduct.address || '無地址' }}
                </p>
                <div class="modal-detail">
                    <span class="label">產品:</span>
                    <ul>
                        <li v-for="(product, idx) in selectedProduct.allProducts" :key="idx">
                            {{ product.products_name }}
                        </li>
                    </ul>
                </div>
                <p class="modal-detail">
                    <span class="label">是否為有機:</span>
                    {{ selectedProduct.isOrganic ? '是' : '否' }}
                </p>
                <p class="modal-detail">
                    <span class="label">網站:</span>
                    <a
                        :href="selectedProduct.website"
                        target="_blank"
                        v-if="selectedProduct.website"
                    >
                        {{ selectedProduct.website }}
                    </a>
                    <span v-else>無網站</span>
                </p>
                <button @click="closeModal" class="modal-close-btn">關閉</button>
            </div>
        </div>

        <!-- 頁面底部頁腳 -->
        <Footer />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '../modules/Header.vue'
import Footer from '../modules/Footer.vue'
import farmsData from '../data/farms.js'

// 將農場數據展開為單一產品數據
const products = ref(
    farmsData
        .filter((farm) => farm.name && farm.products.length > 0) // 過濾有名稱和產品的農場
        .flatMap((farm) =>
            farm.products.map((product) => ({
                productName: product.products_name, // 產品名稱
                productLogo: product.products_logo || '', // 產品圖片（如果為空則保持空）
                name: farm.name, // 農場名稱
                contactPerson: farm.contactPerson,
                phone: farm.phone,
                address: farm.address,
                allProducts: farm.products, // 保留完整產品列表給 modal
                isOrganic: farm.isOrganic,
                website: farm.website,
                logo: farm.logo
            }))
        )
)

// 過濾產品數據，確保無空數據
const filteredProducts = computed(() => {
    return products.value.filter((item) => item.productName)
})

// Modal 控制
const showModal = ref(false)
const selectedProduct = ref({})

const openModal = (index) => {
    selectedProduct.value = filteredProducts.value[index]
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
    selectedProduct.value = {}
}

// 圖片載入錯誤處理
const handleImageError = (event) => {
    event.target.src = '../farms/products/敬請期待.jpg'
}
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
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 產品展示區樣式 */
.fruit-section {
    width: 100%;
    max-width: 1200px;
    margin: 180px 0 20px;
    text-align: center;
}

.fruit-section h2 {
    color: #5d4037;
    font-size: 28px;
    margin-bottom: 20px;
}

/* 產品列表佈局 */
.fruit-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
}

/* 單個產品項樣式 */
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

/* 產品內容並排容器 */
.fruit-content {
    display: flex;
    gap: 15px;
    align-items: center;
    width: 100%;
}

/* 產品圖片容器 */
.fruit-logo-container {
    flex: 0 0 33.33%; /* 固定佔據三分之一寬度 */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 產品圖片樣式 */
.fruit-logo {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 產品資訊容器 */
.fruit-info {
    flex: 0 0 66.67%; /* 固定佔據三分之二寬度 */
    text-align: left;
}

/* 產品名稱樣式 */
.fruit-name {
    font-size: 18px;
    color: #5d4037;
    font-weight: bold;
    margin-bottom: 10px;
}

/* 產品詳細資訊樣式 */
.fruit-detail {
    font-size: 14px;
    color: #5d4037;
    margin: 5px 0;
}

/* 標籤樣式 */
.label {
    font-weight: bold;
    color: #4caf50;
}

/* Modal 樣式 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: #e8f5e9;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: left;
}

.modal-content h2 {
    color: #5d4037;
    font-size: 24px;
    margin-bottom: 15px;
}

.modal-detail {
    font-size: 14px;
    color: #5d4037;
    margin: 10px 0;
}

.modal-detail .label {
    font-weight: bold;
    color: #4caf50;
}

.modal-detail ul {
    margin: 10px 0;
    padding-left: 20px;
}

.modal-detail a {
    color: #4caf50;
    text-decoration: underline;
}

.modal-close-btn {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
}

.modal-close-btn:hover {
    background-color: #388e3c;
}
</style>
