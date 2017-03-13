<template>
    <div>
        <h2>这是用户子路由界面内容</h2>
        <h5>当前路由相对路径为{{$route.fullPath}}</h5>
        <h5>当前路由绝对路径为{{$route.path}}</h5>
    </div>
</template>

<script>
export default {
    name:'UserChild'
}
</script>

<style>
</style>