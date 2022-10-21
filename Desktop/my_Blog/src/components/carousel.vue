<template>
    <el-carousel height="500px" direction="vertical" :autoplay="true" interval="5000">
        <el-carousel-item v-for="item in 4 " :key="item">
            <img :src="'src/assets/img'+item+'.jpg'" alt="">
        </el-carousel-item>
    </el-carousel>
</template>
<script lang="ts" setup>


</script>
<style scoped>
.el-carousel {
    border-radius: 25px;
    margin-top: 25px;
}

.el-carousel__item img {
    opacity: 1;
    margin-left: 270px;
    height: 500px;
    border-radius: 10px;

}
</style>

  