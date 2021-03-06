<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-06 09:42:28
 * @LastEditors: lihao
 * @LastEditTime: 2021-03-06 12:45:38
-->
<template>
    <div class="completion">
        <span class="completionItem" v-for="(item, index) in completionArr" :key="index">{{item}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            completionArr: []
        }
    },
    created() {
        this.getCompletion()
    },
    mounted() {
        this.initCompletion()
    },
    methods: {
        getCompletion() {
            const str = "12345${replace}6789012345${replace}67890"
            this.completionArr = str.split("${replace}")
        },
        initCompletion() {
            const item = document.getElementsByClassName('completionItem')
            for(let i = 0;i< item.length - 1 ;i++) {
                const input = document.createElement('input')
                item[i].appendChild(input)
            }
            const inputEle = document.getElementsByTagName('input')
            for(let i = 0;i< inputEle.length ;i++) {
                inputEle[i].style.border = 'none'
                inputEle[i].style.outline = 'none'
                inputEle[i].style.borderBottom = '1px solid black'
                inputEle[i].style.width = '30px'
                inputEle[i].addEventListener('keydown',function(e) {
                        if( e.keyCode === 13) {
                            return false
                            }
                        const num = inputEle[i].value.split("").length
                        inputEle[i].style.width = (30 + (num * 10 )) + 'px'
                    })
            }
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .completion {
        width: 300px;
    }
    .blanks {
        width: 50px;
    }
</style>
