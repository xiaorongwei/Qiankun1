<!-- src/components/NotFound.vue -->
<template>
    <div class="not-found">
        <h1>404 - 頁面未找到</h1>
        <p>抱歉，您訪問的頁面不存在。</p>
        <router-link to="/">返回首頁</router-link>
    </div>
</template>

<style scoped>
.not-found {
    text-align: center;
    padding: 50px;
}

h1 {
    color: #5d4037;
    font-size: 2.5rem;
}

p {
    color: #666;
    font-size: 1.2rem;
    margin: 20px 0;
}

a {
    color: #4caf50;
    text-decoration: none;
    font-size: 1.1rem;
}

a:hover {
    text-decoration: underline;
}
</style>
