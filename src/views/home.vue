<script setup lang="ts">
import axios from "axios";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";

defineOptions({
  name: 'IndexPage',
})
const { t } = useI18n()
const name = ref("")
axios.defaults.baseURL = "https://nsfw.just4dream.club"

function go() {
  if (name.value) {
    axios({
      url: '/api/check',
      params: {
        "word": name.value
      }
    }).then(res => {
      if (res.data.data) {
        ElMessage.error({
          message: t('intro.check-block'),
          duration: 3000,
        })
      } else {
        ElMessage.success({
          message: t('intro.check-pass'),
          duration: 3000,
        })
      }
    })
  }
}

</script>

<template>
  <div style="text-align: center;">
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://just4dream.club" target="_blank">
        {{ t('intro.title') }}
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      :placeholder="t('intro.whats-the-word')"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-the-word') }}</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>
