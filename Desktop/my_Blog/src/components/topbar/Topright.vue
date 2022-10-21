<template>
    <el-row class="demo-autocomplete text-center">
        <el-col :span="12">
            <el-autocomplete v-model="state1" :fetch-suggestions="querySearch" clearable class="inline-input w-50"
                placeholder="Please select.." @select="handleSelect" />
        </el-col>
        <el-col :span="12">
            <el-autocomplete v-model="state2" :fetch-suggestions="querySearch" :trigger-on-focus="false" clearable
                class="inline-input w-50" placeholder="我真的很棒！" @select="handleSelect" />
        </el-col>
    </el-row>
</template>
    
<script setup lang='ts'>
import { onMounted, ref } from 'vue'

interface RestaurantItem {
    value: string
}

const state1 = ref('')
const state2 = ref('')

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
    const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
    // call callback function to return suggestions
    cb(results)
}
const createFilter = (queryString: string) => {
    return (restaurant: RestaurantItem) => {
        return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
    }
}
const loadAll = () => {
    return [
        { value: '星期一'},
        { value: '星期二'},
        { value: '星期三'},
        { value: '星期四'},
        { value: '星期五'},
        { value: '星期六'},
        { value: '星期七'},
        
    ]
}

const handleSelect = (item: RestaurantItem) => {
    console.log(item)
}

onMounted(() => {
    restaurants.value = loadAll()
})
</script>
    
<style>

</style>