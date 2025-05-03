<template>
    <div class="page-wrapper">
        <!-- 頁面標頭 -->
        <Header />

        <!-- 主要內容區域 -->
        <main class="highlights">
            <!-- 標題與排序選項 -->
            <div class="header-section">
                <h2>最新活動</h2>
                <div class="sort-options">
                    <label for="sort">排序方式：</label>
                    <select id="sort" v-model="sortBy" @change="sortEvents">
                        <option value="date">最新活動</option>
                        <option value="popularity">人氣最多</option>
                    </select>
                </div>
            </div>

            <!-- 活動列表 -->
            <div class="event-list">
                <div v-for="event in sortedEvents" :key="event.id" class="event-card">
                    <!-- 活動圖片 -->
                    <img :src="event.image" :alt="event.name" class="event-image" />
                    <!-- 活動資訊 -->
                    <div class="event-info">
                        <h3>{{ event.name }}</h3>
                        <p>
                            <strong>日期：</strong>
                            {{ event.date }}
                        </p>
                        <p>
                            <strong>地點：</strong>
                            {{ event.location }}
                        </p>
                        <p>
                            <strong>人氣：</strong>
                            {{ event.popularity }} 人感興趣
                        </p>
                    </div>
                    <!-- 報名按鈕 -->
                    <button @click="openSignupModal(event)" class="signup-btn">我要報名</button>
                </div>
            </div>

            <!-- 報名表單（模態框） -->
            <div v-if="showModal" class="modal-overlay">
                <div class="modal">
                    <h3>報名活動：{{ selectedEvent?.name }}</h3>
                    <form @submit.prevent="submitSignup">
                        <div class="form-group">
                            <label for="name">姓名：</label>
                            <input id="name" v-model="signupForm.name" type="text" required />
                        </div>
                        <div class="form-group">
                            <label for="email">電子郵件：</label>
                            <input id="email" v-model="signupForm.email" type="email" required />
                        </div>
                        <div class="form-group">
                            <label for="phone">電話號碼：</label>
                            <input id="phone" v-model="signupForm.phone" type="tel" required />
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="submit-btn">提交報名</button>
                            <button type="button" @click="closeModal" class="cancel-btn">
                                取消
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>

        <!-- 頁面底部 -->
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Header from '../modules/Header.vue'
import Footer from '../modules/Footer.vue'
import eventsData from '../data/events' // 引入活動資料

// 定義活動的類型
interface Event {
    id: number
    name: string
    date: string
    location: string
    popularity: number
    image: string
}

// 使用 ref 儲存活動資料
const events = ref<Event[]>(eventsData)

// 排序方式（date: 最新活動, popularity: 人氣最多）
const sortBy = ref<string>('date')

// 計算排序後的活動列表
const sortedEvents = computed(() => {
    const eventsCopy = [...events.value]
    if (sortBy.value === 'date') {
        return eventsCopy.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else {
        return eventsCopy.sort((a, b) => b.popularity - a.popularity)
    }
})

// 控制模態框顯示
const showModal = ref<boolean>(false)
const selectedEvent = ref<Event | null>(null)

// 報名表單資料
const signupForm = ref({
    name: '',
    email: '',
    phone: ''
})

// 打開報名模態框
const openSignupModal = (event: Event): void => {
    selectedEvent.value = event
    showModal.value = true
}

// 關閉模態框
const closeModal = (): void => {
    showModal.value = false
    selectedEvent.value = null
    signupForm.value = { name: '', email: '', phone: '' } // 重置表單
}

// 提交報名表單（模擬提交）
const submitSignup = (): void => {
    if (selectedEvent.value) {
        alert(
            `報名成功！\n活動：${selectedEvent.value.name}\n姓名：${signupForm.value.name}\n電子郵件：${signupForm.value.email}\n電話：${signupForm.value.phone}`
        )
        closeModal()
    }
}

// 初始排序
const sortEvents = (): void => {
    // 觸發 computed 屬性重新計算
}
</script>

<style scoped>
/* 設置整個頁面的背景顏色 */
.page-wrapper {
    background-color: #e5ffc7; /* 設置背景顏色為 #e5ffc7 */
    min-height: 100vh; /* 確保背景覆蓋整個視窗高度 */
}

/* 頁面主要內容區域 */
.highlights {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 80px; /* 為標頭預留空間，避免被遮擋 */
}

/* 標題與排序選項區域 */
.header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.header-section h2 {
    color: #5d4037;
    font-size: 2rem;
}

.sort-options {
    display: flex;
    align-items: center;
    gap: 10px;
}

.sort-options select {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 1rem;
}

/* 活動列表 */
.event-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

/* 活動卡片 */
.event-card {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    background: white; /* 確保卡片背景為白色，與頁面背景區分 */
}

.event-card:hover {
    transform: translateY(-5px);
}

.event-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.event-info {
    padding: 15px;
}

.event-info h3 {
    margin: 0 0 10px;
    color: #5d4037;
    font-size: 1.5rem;
}

.event-info p {
    margin: 5px 0;
    color: #666;
}

.signup-btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #5d4037;
    color: white;
    border: none;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    font-size: 1rem;
}

.signup-btn:hover {
    background-color: #4a322b;
}

/* 模態框樣式 */
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

.modal {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal h3 {
    margin: 0 0 20px;
    color: #5d4037;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}

.form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

.form-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.submit-btn,
.cancel-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.submit-btn {
    background-color: #5d4037;
    color: white;
}

.submit-btn:hover {
    background-color: #4a322b;
}

.cancel-btn {
    background-color: #ccc;
    color: #333;
}

.cancel-btn:hover {
    background-color: #b3b3b3;
}

/* 響應式設計 */
@media (max-width: 768px) {
    .header-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .event-list {
        grid-template-columns: 1fr;
    }
}
</style>
