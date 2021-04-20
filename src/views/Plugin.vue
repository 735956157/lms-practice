<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-20 13:42:46
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-20 15:06:15
-->
<template>
    <div id="root">
        <div v-html="tem"></div>
    </div>
</template>
<script src="https://unpkg.com/vue@next"></script>
<script>
import judgeAge from '../utils/judgeAge.js'
export default {
    data() {
            return {
                age: 16,
                tem: ''
            }
        },
    mounted() {
        this.tem = judgeAge(this.age, 'not yet of age')
    }
}
</script>