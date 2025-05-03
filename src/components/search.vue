<template>
    <div class="search-container">
        <!-- 搜尋欄 -->
        <input
            type="text"
            placeholder="請輸入關鍵字搜尋商品"
            class="search-bar"
            v-model="searchQuery"
            @input="searchProducts"
        />

        <!-- 搜尋結果 -->
        <div class="search-results">
            <h3 v-if="filteredProducts.length === 0 && searchQuery">無符合條件的商品</h3>
            <div v-else class="product-list">
                <div v-for="product in filteredProducts" :key="product.id" class="product-card">
                    <img :src="product.image" :alt="product.name" class="product-image" />
                    <div class="product-info">
                        <h4>{{ product.name }}</h4>
                        <p>{{ product.description }}</p>
                        <p class="price">價格：NT$ {{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 定義商品的類型
interface Product {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: string
}

// 模擬商品資料（可替換為 API 數據）
const products = ref<Product[]>([
    {
        id: 1,
        name: '有機蘋果',
        description: '新鮮採摘的有機蘋果，無農藥，健康美味。',
        price: 120,
        image: 'https://via.placeholder.com/150x150.png?text=Apple',
        category: '水果'
    },
    {
        id: 2,
        name: '手工肥皂',
        description: '天然手工製作的薰衣草香皂，溫和不刺激。',
        price: 80,
        image: 'https://via.placeholder.com/150x150.png?text=Soap',
        category: '日用品'
    },
    {
        id: 3,
        name: '有機蜂蜜',
        description: '純天然有機蜂蜜，來自本地養蜂場。',
        price: 300,
        image: 'https://via.placeholder.com/150x150.png?text=Honey',
        category: '食品'
    }
])

// 使用者的搜尋關鍵字
const searchQuery = ref<string>('')

// 計算過濾後的商品列表
const filteredProducts = computed(() => {
    if (!searchQuery.value) {
        return products.value // 如果沒有輸入關鍵字，顯示所有商品
    }
    const query = searchQuery.value.toLowerCase()
    return products.value.filter((product) => {
        return (
            product.name.toLowerCase().includes(query) || // 搜尋商品名稱
            product.description.toLowerCase().includes(query) || // 搜尋商品描述
            product.category.toLowerCase().includes(query) // 搜尋商品類別
        )
    })
})

// 搜尋商品（可選，根據 @input 事件觸發）
const searchProducts = (): void => {
    // 這裡可以添加額外的搜尋邏輯，例如防抖（debounce）處理
}
</script>

<style scoped>
/* 搜尋容器 */
.search-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* 搜尋欄樣式 */
.search-bar {
    width: 100%;
    max-width: 500px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 搜尋結果區域 */
.search-results {
    min-height: 200px;
}

/* 商品列表 */
.product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* 商品卡片 */
.product-card {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background: white;
    transition: transform 0.2s;
}

.product-card:hover {
    transform: translateY(-5px);
}

/* 商品圖片 */
.product-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

/* 商品資訊 */
.product-info {
    padding: 15px;
}

.product-info h4 {
    margin: 0 0 10px;
    color: #5d4037;
    font-size: 1.2rem;
}

.product-info p {
    margin: 5px 0;
    color: #666;
    font-size: 0.9rem;
}

.price {
    font-weight: bold;
    color: #4caf50;
}

/* 響應式設計 */
@media (max-width: 768px) {
    .search-bar {
        max-width: 100%;
    }

    .product-list {
        grid-template-columns: 1fr;
    }
}
</style>
