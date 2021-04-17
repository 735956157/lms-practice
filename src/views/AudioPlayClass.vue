<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-16 17:29:22
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-17 12:43:58
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
        }
    },
    mounted () {
        const audioPlay =  AudioPlay.getInstance('.audioPlay', 'https://s1.thinktown.com/audio/20190903151714_6cc874.mp3')
    }
}
</script>