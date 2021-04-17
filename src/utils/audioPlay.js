/*
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-09 13:17:29
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-17 12:41:45
 */
class AudioPlay {
    constructor(parentEle, src) {
        this.parentEle = parentEle
        this.src = src
        this.init(parentEle, src)
    }
   init(parentEle, src) {
        const audio = document.createElement('audio')
        audio.controls = true
        audio.autoplay = true
        audio.src = src
        const parentE = document.querySelector(parentEle)
        parentE.appendChild(audio)
        const promise = audio.play()
        promise.then(() => {
            // Autoplay started!
        }).catch(error => {
            alert("无法自动播放，请手动播放音频")
        })
    }
  static getDom(ele) {
    return  document.querySelector(ele);
  }

  static getInstance(parentEle, src) {
    if(!this.instance) {
      this.instance = new AudioPlay(parentEle, src);
    } else {
        this.instance.src = src
        this.instance.parentEle = parentEle
    }
    return this.instance
  }
}

export default AudioPlay