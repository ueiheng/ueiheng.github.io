<template>
     <div class="topbar">
          <div class="top-container">
               <div class="top-container-left">
                    <a href="/"><img src="../../assets/logo.jpg" alt=""></a>
               </div>
               <div class="top-container-center">{{P}}</div>
               <div class="top-container-right">
                    <Topright />
               </div>
          </div>
          <div class="top-active">active</div>
     </div>
</template>
    
<script setup lang="ts">
import Topright from './Topright.vue';
import {P} from '../../hooks/P-random.js'


</script>
    
<style lang="less">
.topbar {
     width: 100%;
     height: 78px;
     line-height: 78px;
     background-color: rgb(236, 227, 227);
     box-shadow: 0px 5px rgba(210, 205, 205, 0.304);
     border-bottom: 1px solid rgba(114, 113, 113, 0.342);
     overflow: hidden;
}

.top-container {
     margin: 0 auto;
     height: 78px;
     padding: 0 24px;
     line-height: 48px;
     width: 100%;
     min-width: 1280px;
     position: relative;
     display: flex;
     flex-direction: row;

     &-left {
          opacity: 1;
          margin-left: 100px;
     }

     &-center {
          margin: 30px 400px;
         font-style:italic;
         font-size: 35px;
         font-family: 'Shouxie';
     }

     &-right {
          position: absolute;
          right: 200px;
          top: 20px
     }
}
</style>