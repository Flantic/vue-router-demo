<template>
    <div>
        <h1>这是用户界面内容<button @click="$router.go(-1)">返回1步</button></h1>
        <h3>当前User界面的params.id为{{$route.params.id}}
        <br>   
            当前匹配的组件为{{$route.name}}
        <br>
            
        </h3>
        <router-link to="/User/13/post">这个按钮带你去子路由</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>