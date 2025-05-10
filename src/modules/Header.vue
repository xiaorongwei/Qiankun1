<!-- src/modules/Header.vue -->
<template>
    <header class="header">
        <!-- 頂部導航欄 -->
        <div class="topbar">
            <div class="topbar-content">
                <!-- 搜尋框 -->
                <input type="text" placeholder="請輸入關鍵字搜尋商品" class="search-bar" />
                <!-- Logo 和標題獨立區域 -->
                <div class="logo-title-container">
                    <img src="/logo.png" alt="Logo" class="logo" />
                    <h1 class="title">大武有機生產合作社</h1>
                </div>
            </div>
        </div>

        <!-- 主導航欄 -->
        <nav class="navbar">
            <!-- 導航連結 -->
            <div class="nav-links">
                <router-link to="/" class="navbar-link">🏡首頁</router-link>
                <router-link to="/cooperate" class="navbar-link">📚會員名冊</router-link>
                <router-link to="/commodity" class="navbar-link">🛒商品頁</router-link>

                <div class="dropdown">
                    <span class="navbar-link">🌱關於我們</span>
                    <div class="dropdown-menu">
                        <router-link to="/vice" class="dropdown-item">📖成立主旨</router-link>
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
        </nav>
    </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
/* 標頭整體樣式 */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
}

/* 頂部導航欄樣式 */
.topbar {
    width: 100%;
    background-color: #ffffff;
    border-bottom: 2px solid #66bb6a;
    padding: 20px 0;
    box-sizing: border-box;
}

.topbar-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: center; /* 改為居中，移除 space-between */
    align-items: center;
    gap: 20px; /* 控制搜索框和標誌之間的間距 */
    box-sizing: border-box;
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
    justify-content: center;
    gap: 15px;
    /* 移除 flex: 1，改用自然寬度 */
}

/* 標誌圖片 */
.logo {
    height: 80px;
    width: auto;
}

/* 標題 */
.title {
    color: #5d4037;
    font-size: 32px;
    margin: 0;
    text-align: center;
}

/* 主導航欄 */
.navbar {
    width: 100%;
    background-color: #dfffe1;
    padding: 10px 0;
    border-bottom: 3px solid #66bb6a;
    box-sizing: border-box;
}

.nav-links {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center; /* 確保導航連結居中 */
}

/* 導航連結 */
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

/* 下拉選單樣式 */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    cursor: pointer;
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
    font-weight: normal;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}

/* 當滑鼠懸停時顯示下拉選單 */
.dropdown:hover .dropdown-menu {
    display: block;
}

/* 響應式設計 */
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
