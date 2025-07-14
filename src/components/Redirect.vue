<!-- src/components/Redirect.vue -->
<template>
    <div></div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()
const route = useRoute()

onMounted(() => {
    const { product, farmId } = route.query
    router.replace({
        path: '/dist/commodity',
        query: {
            product,
            ...(farmId ? { farmId } : {})
        }
    })
})
</script>
