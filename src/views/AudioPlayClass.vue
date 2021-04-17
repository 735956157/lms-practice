<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-16 17:29:22
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-17 14:04:04
-->
<template>
    <div class="audioPlay">
        <button @click="getNewAudio" class="btn"></button>
    </div>
</template>
<script>
import AudioPlay from '../utils/audioPlay.js'
export default {
    data() {
        return {
        }
    },
    mounted () {
        const audioPlay =  AudioPlay.getInstance('.audioPlay', 'https://s1.thinktown.com/audio/20190903151714_6cc874.mp3')
    },
    methods: {
        getNewAudio() {
            const audioPlay2 =  AudioPlay.getInstance('.audioPlay', 'https://gy-sycdn.kuwo.cn/07f853897a5a9532c6a09f88d34e7922/607a7648/resource/n3/69/44/2449479021.mp3')
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .btn {
        width: 30px;
        height: 30px;
    }
</style>