<template>
    <div class="page-wrapper">
        <!-- 導航欄：包含 Logo 和導航連結 -->
        <Header />

        <!-- 幻燈片 -->
        <Slideshow />

        <!-- 主要內容 -->
        <main class="main-content">
            <!-- 上傳區域：允許用戶上傳圖片和文案 -->
            <div class="upload-section">
                <input type="file" accept="image/*" @change="handleImageUpload" ref="imageInput" />
                <textarea
                    v-model="postText"
                    placeholder="輸入你的文案..."
                    class="post-input"
                ></textarea>
                <button @click="submitPost" class="submit-btn">發布</button>
            </div>

            <!-- 貼文顯示區域：顯示用戶上傳的圖片和文案 -->
            <div class="posts">
                <div v-for="(post, index) in posts" :key="index" class="post">
                    <img v-if="post.image" :src="post.image" class="post-image" />
                    <p>{{ post.text }}</p>
                </div>
            </div>

            <!-- 文章區域 -->
            <section class="article-section">
                <h2 class="article-title">景點特色</h2>
                <div class="article-divider"></div>
                <p class="article-description">這裡是文章描述的簡介</p>

                <!-- 可下拉文章區塊 -->
                <div class="article-list">
                    <details class="article-item">
                        <summary class="article-item-title">
                            <span class="icon">🚌</span>
                            交通資訊
                        </summary>
                        <div class="article-content">
                            <h3>自行開車:</h3>
                            <p>根據需求自行填寫</p>
                        </div>
                        <div class="article-content">
                            <h3>大眾運輸:</h3>
                            <p>根據需求自行填寫</p>
                        </div>
                    </details>

                    <!-- 附近交通資訊 -->
                    <details class="article-item">
                        <summary class="article-item-title">
                            <span class="icon">🚗</span>
                            附近交通資訊
                        </summary>
                        <div class="article-content">
                            <p>例如:某某公車站(距離3.5公里)</p>
                        </div>
                    </details>
                </div>
            </section>
        </main>

        <!-- 頁尾 -->
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '../modules/Footer.vue'
import Header from '../modules/Header.vue'
import Slideshow from '../modules/Slideshow.vue'

const router = useRouter()

// 上傳相關
const imageInput = ref(null)
const postText = ref('')
const posts = ref([])

const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            posts.value.unshift({ image: e.target.result, text: '' })
        }
        reader.readAsDataURL(file)
    }
}

const submitPost = () => {
    if (postText.value) {
        if (posts.value.length > 0 && !posts.value[0].text) {
            posts.value[0].text = postText.value
        } else {
            posts.value.unshift({ image: null, text: postText.value })
        }
        postText.value = ''
        imageInput.value.value = ''
    }
}
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

/* 上傳區域 */
.upload-section {
    width: 100%;
    max-width: 800px;
    margin: 20px 0;
}

.post-input {
    width: 100%;
    height: 100px;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #8d6e63;
}

.submit-btn {
    background-color: #8d6e63;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.submit-btn:hover {
    background-color: #6d4c41;
}

/* 貼文區域 */
.posts {
    width: 100%;
    max-width: 800px;
}

.post {
    background: white;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.post-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}

/* 調整 Slideshow 的 margin-top，避免被 header 覆蓋 */
:deep(.slideshow) {
    margin-top: 180px; /* 根據 header 高度調整 */
}

/* 文章區域樣式 */
.article-section {
    width: 100%;
    max-width: 1200px;
    margin: 40px 0;
    padding: 0 20px;
}

/* 文章標題 */
.article-title {
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
}

/* 文章標題下的分隔線 */
.article-divider {
    width: 50px;
    height: 3px;
    background-color: #ff4d4f;
    margin-bottom: 20px;
}

/* 文章描述 */
.article-description {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 30px;
}

/* 文章列表 */
.article-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* 單個文章區塊 */
.article-item {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}

/* 文章區塊標題 */
.article-item-title {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

/* 圖標樣式 */
.icon {
    font-size: 20px;
}

/* 文章內容 */
.article-content {
    padding: 15px;
    font-size: 14px;
    color: #333;
    line-height: 1.6;
}

/* 移除 details 的預設箭頭（可選） */
.article-item summary::-webkit-details-marker {
    display: none;
}

.article-item summary::after {
    content: '▼';
    font-size: 12px;
    margin-left: auto;
}

/* 展開時旋轉箭頭 */
.article-item[open] summary::after {
    content: '▲';
}
</style>
