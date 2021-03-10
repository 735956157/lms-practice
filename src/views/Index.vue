<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-04 10:38:29
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-10 10:40:04
-->
<template>
    <div class="index">
        <router-link target="_blank" :to="{path:'/ribbonEffect'}">
            <el-button type="primary">点击跳转查看效果</el-button>
        </router-link>
        <router-link target="_blank" :to="{path:'/completion'}">
            <el-button type="primary">点击跳转填空题</el-button>
        </router-link>
        <router-link target="_blank" :to="{path:'/text'}">
            <el-button type="primary">点击跳转文章</el-button>
        </router-link>
    </div>
</template>