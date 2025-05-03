<!-- src/components/Certificate.vue -->
<template>
    <div class="page-wrapper">
        <Header />
        <main class="main-content">
            <div class="certificate">
                <div class="certificate-content">
                    <h2>有機證書</h2>
                    <p>這裡展示大武有機生產合作社的有機認證證書。</p>
                    <img src="/logo.png" alt="有機證書" class="certificate-image" />
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from '../modules/Header.vue'
import Footer from '../modules/Footer.vue'
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

.certificate {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
}

.certificate-content {
    margin-top: 180px; /* 根據 Header 高度調整 */
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    color: #5d4037;
    font-size: 2rem;
    margin-bottom: 20px;
}

p {
    color: #666;
    font-size: 1.1rem;
    margin-bottom: 20px;
}

.certificate-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 500px;
}
</style>
