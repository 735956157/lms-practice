<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-04-16 17:29:22
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-17 10:40:12
-->
<template>
    <div class="audioPlay">
        <audio  controls autoplay :src='src'>
        </audio>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            src: 'https://s1.thinktown.com/audio/20190903151714_6cc874.mp3'
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            const audio = document.querySelector('audio')
            const promise = audio.play()
            if (promise !== undefined) {
            promise.then(() => {
                // Autoplay started!
            }).catch(error => {
                console.log(error)
                this.$alert('请手动点击播放音频', '无法播放', {
                    confirmButtonText: '确定'
                })
            })
            }
        }
    }
}
</script>