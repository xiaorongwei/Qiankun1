<template>
    <header class="header">
        <div class="topbar">
            <div class="topbar-content">
                <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="請輸入關鍵字搜尋商品或農場"
                    class="search-bar"
                    @keyup.enter="navigateToResult"
                />

                <div class="logo-title-container">
                    <img src="/logo.png" alt="Logo" class="logo" />
                    <h1 class="title">大武有機生產合作社</h1>
                </div>
            </div>

            <!-- 搜尋建議 -->
            <div class="search-suggestions" v-if="filteredResults.length > 0 && searchQuery">
                <ul>
                    <li
                        v-for="item in filteredResults"
                        :key="item.id"
                        @click="navigateToResultItem(item)"
                    >
                        <template v-if="item.type === 'product'">
                            <strong>{{ item.productName }}</strong>
                            - 來自: {{ item.farmName }}
                        </template>
                        <template v-else-if="item.type === 'farm'">
                            查看
                            <strong>{{ item.farmName }}</strong>
                            農場所有商品
                        </template>
                    </li>
                </ul>
            </div>
        </div>

        <nav class="navbar">
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
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import farms from '../data/farms'

const router = useRouter()
const searchQuery = ref('')

// 商品與農場混合搜尋結果
const filteredResults = computed(() => {
    if (!searchQuery.value) return []
    const query = searchQuery.value.toLowerCase().trim()

    // 商品搜尋
    const fromProducts = farms.flatMap((farm) =>
        farm.products
            .filter((product) => product.products_name.toLowerCase().includes(query))
            .map((product) => ({
                type: 'product',
                id: `${farm.id}-${product.products_name}`,
                productName: product.products_name,
                farmName: farm.name,
                farmId: farm.id
            }))
    )

    // 農場搜尋
    const fromFarms = farms
        .filter((farm) => farm.name.toLowerCase().includes(query))
        .map((farm) => ({
            type: 'farm',
            id: `farm-${farm.id}`,
            farmName: farm.name,
            farmId: farm.id
        }))

    return [...fromProducts, ...fromFarms]
})
// 跳轉頁面
const forceNavigateTo = (productName = null, farmId = null) => {
    const newQuery = {
        ...(productName ? { product: productName } : {}),
        ...(farmId ? { farmId } : {})
    }

    if (router.currentRoute.value.path === '/commodity') {
        router.push({ path: '/redirect', query: newQuery })
    } else {
        router.push({ path: '/commodity', query: newQuery })
    }
}

// 按 Enter 搜尋
const navigateToResult = () => {
    if (!searchQuery.value) return
    const result = filteredResults.value[0]
    if (result) {
        if (result.type === 'product') {
            forceNavigateTo(result.productName) // 僅傳遞產品名稱
        } else if (result.type === 'farm') {
            forceNavigateTo(null, result.farmId) // 農場搜尋傳遞 farmId
        }
    } else {
        forceNavigateTo(searchQuery.value) // 無建議時傳遞搜尋關鍵字
    }
    searchQuery.value = ''
}

// 點選搜尋建議
const navigateToResultItem = (item) => {
    if (item.type === 'product') {
        forceNavigateTo(item.productName) // 僅傳遞產品名稱
    } else if (item.type === 'farm') {
        forceNavigateTo(null, item.farmId) // 農場搜尋傳遞 farmId
    }
    searchQuery.value = ''
}
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
}

.topbar {
    background-color: #dfffe1;
    border-bottom: 2px solid #66bb6a;
    padding: 20px 0;
}

.topbar-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.search-bar {
    padding: 8px 15px;
    border: 1px solid #ddd;
    border-radius: 20px;
    width: 300px;
    font-size: 14px;
}

.logo-title-container {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo {
    height: 80px;
}

.title {
    color: #5d4037;
    font-size: 32px;
    margin: 0;
    text-align: center;
}

.navbar {
    background-color: #dfffe1;
    padding: 10px 0;
    border-bottom: 3px solid #66bb6a;
}

.nav-links {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

.navbar-link {
    font-size: 16px;
    text-decoration: none;
    color: #000;
    font-weight: bold;
    padding: 5px 10px;
    transition: background-color 0.3s;
}

.navbar-link:hover {
    background-color: #f0f0f0;
    border-radius: 5px;
}

.dropdown {
    position: relative;
    display: inline-block;
}

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

.dropdown-item {
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
    font-size: 14px;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.search-suggestions {
    position: absolute;
    top: 100%;
    left: 20px;
    max-width: 300px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    padding: 5px 0;
}

.search-suggestions ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.search-suggestions li {
    padding: 8px 15px;
    cursor: pointer;
}

.search-suggestions li:hover {
    background-color: #f0f0f0;
}

@media (max-width: 768px) {
    .topbar-content {
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
