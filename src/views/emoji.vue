<template>
    <div>
    <ul v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <el-row justify="center">
            <li v-for="i in count" :key="i">
                <el-card style="max-width: 480px">
                    <template #header>Test</template>
                    <el-image
                        :src="randomUrl(i)"
                        :zoom-rate="1.2"
                        :max-scale="7"
                        :min-scale="0.2"
                        :preview-src-list="[randomUrl(i)]"
                        :initial-index="0"
                        fit="cover"
                    />
                </el-card>
            </li>
        </el-row>
    </ul>
    <div style="text-align: center;">
        <p v-if="loading">Loading...</p>
        <p v-if="noMore">No more</p>
    </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
const urls = [
  'https://avatars.githubusercontent.com/u/167064418?v=4',
  'https://avatars.githubusercontent.com/u/18116833?s=400&u=0bab63793731ab05ebc939f02861154eba10e2c3&v=4'
]

const randomUrl = (i: number) => {
  return urls[i%2]
}

</script>

<style scoped>
</style>