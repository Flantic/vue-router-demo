<template>
    <div>
        <h1>这是页面二的内容
        <button @click="$router.go(-1)">返回1步</button>
        <button @click="$router.go(1)">前进1步</button></h1>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>