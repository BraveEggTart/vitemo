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
import axios from 'axios';
import { ref } from 'vue'

axios.defaults.baseURL = "http://localhost"

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

const urls = ref<string[]>([]);

onMounted(() => {
  for (let index = 0; index < 20; index++) {
    axios({
      url: "/api/emoji/random",
      method:"get"
    }).then(res => {
      urls.value.push(res.data.data)
    })
  }
});


const randomUrl = (i: number) => {
  return urls.value[i%20]
}

</script>

<style scoped>
</style>