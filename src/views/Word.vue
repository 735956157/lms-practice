<!--
 * @Descripttion:  
 * @Author: lihao
 * @Date: 2021-03-06 09:42:28
 * @LastEditors: lihao
 * @LastEditTime: 2021-04-01 09:12:31
-->
<template>
  <div class="word"  ref="word">
    {{ wordStr }}
  </div>
</template>
<script>
import Highlighter from "web-highlighter";
export default {
  data() {
    return {
      wordStr: "my her is aks asd abagcd",
      selectionStart: 0,
    }
  },
  mounted() {
    const highlighter = new Highlighter({
    style: {
        className: "a",
    },
    })
    // highlighter
    // .on('selection', ({id}) => {
    //     // display different bg color when hover
    //     highlighter.addClass('a', id);
    // })
    // // .on('selection:hover-out', ({id}) => {
    // //     // remove the hover effect when leaving
    // //     highlighter.removeClass('active', id);
    // // })
    // .on('selection:create', ({sources}) => {
    //     sources = sources.map(hs => ({hs}));
    //     // save to backend
    //     // store.save(sources);
    // })
    highlighter.run()
  },
  methods: {
    
  }
}
</script>
<style lang="scss" >
.a {
  background-color: red;
  display: inline-block;
}
</style>
