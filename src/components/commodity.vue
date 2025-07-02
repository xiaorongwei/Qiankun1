<template>
    <div class="page-wrapper">
        <Header />

        <main class="main-content">
            <section class="fruit-section">
                <h2>商品頁 {{ farmId.value ? `- ${getFarmName(farmId.value)}` : '' }}</h2>

                <div v-if="filteredProducts.length > 0" class="fruit-list">
                    <div
                        v-for="(productItem, index) in filteredProducts"
                        :key="index"
                        class="fruit-item"
                        @click="openModal(index)"
                    >
                        <div class="fruit-content">
                            <div class="fruit-logo-container">
                                <img
                                    :src="productItem.productLogo"
                                    :alt="productItem.productName"
                                    class="fruit-logo"
                                    @error="handleImageError"
                                />
                            </div>
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

                <p v-else style="color: red; font-weight: bold">
                    查無符合關鍵字「{{ keyword }}」或農場的商品。
                    <router-link to="/commodity">查看所有商品</router-link>
                </p>
            </section>
        </main>

        <!-- Modal 彈窗 -->
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

        <Footer />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../modules/Header.vue'
import Footer from '../modules/Footer.vue'
import farmsData from '../data/farms.js'

// 抓取 route query
const route = useRoute()
const keyword = ref('')
const farmId = ref('')

// 初始化：抓取網址上的關鍵字和農場 ID
onMounted(() => {
    if (route.query.product) {
        keyword.value = route.query.product.toString().trim().toLowerCase()
    }
    if (route.query.farmId) {
        farmId.value = route.query.farmId.toString().trim()
    }
})

// 組合所有產品資料
const products = ref(
    farmsData
        .filter((farm) => farm.name && farm.products.length > 0)
        .flatMap((farm) =>
            farm.products.map((product) => ({
                productName: product.products_name,
                productLogo: product.products_logo || '',
                name: farm.name,
                contactPerson: farm.contactPerson,
                phone: farm.phone,
                address: farm.address,
                allProducts: farm.products,
                isOrganic: farm.isOrganic,
                website: farm.website,
                logo: farm.logo,
                farmId: farm.id
            }))
        )
)

// 根據 keyword 和 farmId 過濾產品
const filteredProducts = computed(() => {
    let filtered = products.value

    // 農場過濾
    if (farmId.value) {
        filtered = filtered.filter((item) => item.farmId.toString() === farmId.value)
    }

    // 產品名稱過濾
    if (keyword.value) {
        filtered = filtered.filter((item) => item.productName.toLowerCase().includes(keyword.value))
    }

    return filtered
})

// 獲取農場名稱
const getFarmName = (id) => {
    const farm = farmsData.find((farm) => farm.id.toString() === id)
    return farm ? farm.name : ''
}

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

// 圖片錯誤處理
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
