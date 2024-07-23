<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const locale = zhCn;
</script>

<template>
  <div class="m-5">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
  <TheFooter></TheFooter>
</template>