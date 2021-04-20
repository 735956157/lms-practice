<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-04 10:38:29
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-20 14:01:20
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
        <router-link target="_blank" :to="{path:'/word'}">
            <el-button type="primary">点击跳转单词</el-button>
        </router-link>
        <router-link target="_blank" :to="{path:'/list'}">
            <el-button type="primary">点击跳转列表</el-button>
        </router-link>
        <router-link target="_blank" :to="{path:'/audioPlay'}">
            <el-button type="primary">点击跳转音频播放</el-button>
        </router-link>
        <router-link target="_blank" :to="{path:'/audioPlayClass'}">
            <el-button type="primary">点击跳转音频播放实例化</el-button>
        </router-link>
        <router-link target="_blank" :to="{path:'/sort'}">
            <el-button type="primary">点击跳转排序</el-button>
        </router-link>
        <router-link target="_blank" :to="{path:'/plugin'}">
            <el-button type="primary">点击跳转插件</el-button>
        </router-link>
    </div>
</template>