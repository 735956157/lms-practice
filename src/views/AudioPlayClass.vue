<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-16 17:29:22
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-17 10:17:06
-->
<template>
    <div class="audioPlay">
    </div>
</template>
<script>
import AudioPlay from '../utils/audioPlay.js'
export default {
    data() {
        return {
            src: 'https://s1.thinktown.com/audio/20190903151714_6cc874.mp3'
        }
    },
    created () {
        const audioPlay =  AudioPlay.getInstance('div', this.src)
    },
    methods: {
        
    }
}
</script>