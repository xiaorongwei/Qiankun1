<template>
    <!-- 定義頁面頂部的 header 組件 -->
    <header class="header">
        <!-- 主欄位，包含所有內容的容器 -->
        <div class="main-bar">
            <!-- 主內容區域，控制 Logo、搜尋框和佈局 -->
            <div class="main-bar-content">
                <!-- 包含 Logo 和標題的容器 -->
                <div class="logo-title-container">
                    <!-- 顯示網站 Logo，來源為 /logo.png，alt 為備用文字 -->
                    <img src="/logo.png" alt="Logo" class="logo" />
                    <!-- 顯示網站標題 -->
                    <h1 class="title">大武有機生產合作社</h1>
                </div>
                <!-- 搜尋輸入框，綁定 v-model 以監聽輸入 -->
                <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="請輸入關鍵字搜尋商品 (如: 水果, 農場)"
                    class="search-bar"
                    @keyup.enter="searchFarms"
                />
            </div>
            <!-- 顯示搜尋結果的區域 -->
            <div class="search-results" v-if="filteredFarms.length > 0">
                <h3>搜尋結果：</h3>
                <ul>
                    <li v-for="farm in filteredFarms" :key="farm.id">
                        <!-- 顯示農場名稱 -->
                        <strong>{{ farm.name }}</strong>
                        -
                        <!-- 顯示聯繫人 -->
                        聯繫人: {{ farm.contactPerson }} -
                        <!-- 顯示產品 -->
                        產品: {{ farm.products.map((p) => p.products_name).join(', ') || '無' }}
                    </li>
                </ul>
            </div>
            <!-- 導航連結區域，包含主要導航和下拉菜單 -->
            <div class="nav-links">
                <router-link to="/" class="navbar-link">🏡首頁</router-link>
                <router-link to="/cooperate" class="navbar-link">📚會員名冊</router-link>
                <router-link to="/commodity" class="navbar-link">🛒商品頁</router-link>

                <div class="dropdown">
                    <span class="navbar-link">🌱關於我們</span>
                    <div class="dropdown-menu">
                        <router-link to="/vice" class="dropdown-item">🍍小農的故事</router-link>
                        <router-link to="/certificate" class="dropdown-item">
                            📜有機證書
                        </router-link>
                    </div>
                </div>

                <div class="dropdown">
                    <span class="navbar-link dropdown-toggle">📨活動消息</span>
                    <div class="dropdown-menu">
                        <router-link to="/highlights" class="dropdown-item">📅最新活動</router-link>
                        <router-link to="/activity-highlights" class="dropdown-item">
                            🗂️活動花絮
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
// 導入 vue-router 的 useRouter 函數，用於程式化導航
import { useRouter } from 'vue-router'
// 導入 Vue 的 ref 和 computed 函數，用於響應式數據和計算屬性
import { ref, computed } from 'vue'
// 導入 farms 數據
import farms from '../data/farms' // 假設 farms 數據位於 ../data/farms.js

// 創建 router 實例，用於導航操作
const router = useRouter()

// 定義搜尋關鍵字的響應式數據
const searchQuery = ref('')

// 定義過濾後的農場數據，使用 computed 動態計算
const filteredFarms = computed(() => {
    if (!searchQuery.value) return []
    return farms.filter((farm) => {
        // 搜尋農場名稱或產品名稱是否包含關鍵字（不區分大小寫）
        const nameMatch = farm.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        const productMatch = farm.products.some((p) =>
            p.products_name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
        return nameMatch || productMatch
    })
})

// 搜尋函數，觸發時更新 filteredFarms
const searchFarms = () => {
    // 這裡可以添加額外邏輯，例如導航到搜尋結果頁
    console.log('搜尋結果:', filteredFarms.value)
}
</script>

<style scoped>
/* header 樣式，設置相對定位並填滿寬度 */
.header {
    position: relative;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
}

/* 主欄位樣式，設置背景色和邊框 */
.main-bar {
    width: 100%;
    background-color: #dfffe1;
    padding: 10px 0;
    border-bottom: 3px solid #66bb6a;
    box-sizing: border-box;
}

/* 主內容區域樣式，限制最大寬度並使用 Flex 佈局 */
.main-bar-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

/* Logo 和標題容器樣式 */
.logo-title-container {
    display: flex;
    align-items: center;
    gap: 15px;
}

/* Logo 圖片樣式 */
.logo {
    height: 80px;
    width: auto;
}

/* 標題樣式 */
.title {
    color: #5d4037;
    font-size: 32px;
    margin: 0;
    text-align: center;
}

/* 搜尋框樣式 */
.search-bar {
    padding: 8px 15px;
    border: 1px solid #ddd;
    border-radius: 20px;
    width: 300px;
    font-size: 14px;
}

/* 搜尋結果區域樣式 */
.search-results {
    max-width: 1200px;
    margin: 10px auto;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
}

/* 導航連結容器樣式 */
.nav-links {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

/* 導航連結樣式 */
.navbar-link {
    font-size: 16px;
    text-decoration: none;
    color: #000;
    font-weight: bold;
    padding: 5px 10px;
    white-space: nowrap;
    transition: background-color 0.3s;
}

/* 導航連結懸停效果 */
.navbar-link:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
}

/* 下拉選單容器樣式 */
.dropdown {
    position: relative;
    display: inline-block;
}

/* 下拉選單觸發器樣式 */
.dropdown-toggle {
    cursor: pointer;
}

/* 下拉菜單樣式 */
.dropdown-menu {
    display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 5px;
    margin-top: 5px;
}

/* 下拉菜單項樣式 */
.dropdown-item {
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
    font-size: 14px;
    font-weight: normal;
}

/* 下拉菜單項懸停效果 */
.dropdown-item:hover {
    background-color: #f0f0f0;
}

/* 下拉菜單懸停顯示 */
.dropdown:hover .dropdown-menu {
    display: block;
}

/* 響應式設計，螢幕寬度小於 768px 時生效 */
@media (max-width: 768px) {
    .main-bar-content {
        flex-direction: column;
        gap: 10px;
    }

    .search-bar {
        width: 100%;
        max-width: 300px;
    }

    .logo {
        height: 60px;
    }

    .title {
        font-size: 24px;
    }

    .nav-links {
        flex-direction: column;
        gap: 10px;
    }
}
</style>
