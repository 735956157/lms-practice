<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-08 09:27:50
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-08 15:17:02
-->
<template>
    <div class="list-box">
        <div class="top">我的列表</div>
            <el-scrollbar style="height:100%">
        <div class="content" >
                <el-row :gutter="20">
                    <el-col :span="8" v-for="(item, index) in showArr" :key="index"><div class="list-item">{{item+1}}</div></el-col>
                </el-row>
        </div>
            </el-scrollbar>
        <div class="bottom">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                 @current-change="handleCurrentChange"
                >
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: 0,
            pageSize: 10,
            showArr: Array(100),
            total: 100
        }
    },
    created() {
        this.showArr.length = this.pageSize
        for(let i = 0; i < this.showArr.length; i++) {
            this.showArr[i] = i
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.showArr = []
            for(let i = this.pageSize * (val - 1); i < this.pageSize * val; i++) {
                this.showArr.push(i)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .list-box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .top {
            width: 100%;
            height: 100px;
            text-align: center;
            margin-bottom: 50px;
        }
        .content {
            flex: 1;
            .list-item {
                height: 30px;
                margin: 10px 5px;
                border: 1px solid black;
            }
        }
        .bottom {
            width: 100%;
            height: 50px;
        }
    }
</style>