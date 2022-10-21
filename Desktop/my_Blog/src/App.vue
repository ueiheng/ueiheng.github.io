<template>
    <div class="content" :style="{background:`url(${bac})`}">
        <!-- 顶部导航栏 -->
        <div class="top-banner">
            <Topbar />
        </div>
        <div class="page">
            <div class="page-left"></div>
            <div class="center-wrap">
                <Main></Main>
                <Footer></Footer>
            </div>

            <div class="page-right">
                <Music/>
            </div>
        </div>
    </div>
</template>
  
<script setup lang='ts'>
import Footer from './components/footer/Footer.vue'
import Main from './components/main/Main.vue'
import Topbar from './components/topbar/Topbar.vue'
import Music from './components/music/music.vue'

import bac from './assets/bac.jpg'
</script>
  
<style lang="less">
body {
    background:url(`${bac}`);
}

* {
    margin: 0;
    padding: 0;
}

body {
    position: relative;
}

.top-banner {
    position: relative;
    top: 0;
    left: 0;
    min-width: 100%;
}

.page {
    display: flex;
    flex-direction: row;
    
    
    &-left {
        flex: 0.4;
        height: 100%;
    }

    .center-wrap {
        flex: 4;
        // background-color: greenyellow;
        border-radius: 25px;
        margin-top: 30px;
        margin-right: 8px;
        opacity: 0.8;
        box-shadow: 4px 1px 10px 1px rgba(0,0,0,0.5)/*blur值为10px*/
    }

    &-right {
        flex: 0.8;
        height: 1000px;

    }
}
</style>