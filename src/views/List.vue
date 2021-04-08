<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-08 09:27:50
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-08 16:57:57
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
                 :page-count="pageCount"
                 :page-size="pageSize"
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
            //每页显示的条数
            pageSize: 100,
            showArr: Array(300),
            //总条数
            total: 50,
            //总页数
            pageCount: 0
        }
    },
    created() {
        this.total = this.showArr.length
        this.showArr.length = this.pageSize
        this.pageCount = this.total / this.pageSize
        console.log(this.pageCount)
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
            line-height: 100px;
            text-align: center;
            margin-bottom: 20px;
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