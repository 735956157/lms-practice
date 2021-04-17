/*
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-09 13:17:29
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-17 14:19:14
 */
class AudioPlay {
    constructor(parentEle, src) {
        this.parentEle = parentEle
        this.src = src
        this.init(parentEle, src)
    }
   init(parentEle, src) {
        const audio = document.createElement('audio')
        this.audio = audio
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
      this.instance = new AudioPlay(parentEle, src)
      return this.instance
    } else {
      this.instance.audio.src = src
      this.instance.audio.play()
      console.log(this.instance)
    }
  }
}

export default AudioPlay