<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-08 09:27:50
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-08 13:01:13
-->
<template>
    <div class="list-box">
        <div class="top">我的列表</div>
        <div class="content">
            <el-row :gutter="20">
                <el-col :span="8" v-for="(item, index) in showArr" :key="index"><div class="list-item">{{item+1}}</div></el-col>
            </el-row>
        </div>
        <div class="bottom">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="100"
                @current-change="handleCurrentChange">
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
            showArr: [1,2,3,4,5,6,7,8,9,10],
            total: 100
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.current = this.total / this.pageSize
            const itemArr = this.current * val
            console.log(itemArr)
            this.showArr = []
            for(let i = itemArr - this.pageSize; i < itemArr; i++) {
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
            overflow: hidden;
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