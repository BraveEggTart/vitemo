<template>
    <div class="text-center">
      <el-tooltip :content="t('home')" placement="top">
        <router-link class="icon-btn mx-2" to="/">
          <i-mdi-home-search-outline class="icon-footer" />
        </router-link>
      </el-tooltip>
  
      <el-tooltip :content="isDark ? t('change light') : t('change dark')" placement="top">
        <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
          <i-ph-cloud-moon-bold v-if="isDark" class="icon-footer" />
          <i-ph-sun-horizon-bold v-else class="icon-footer" />
        </button>
      </el-tooltip>
  
      <el-tooltip :content="t('change lang')" placement="top">
        <button class="icon-btn mx-2" @click="toggleLocales()">
          <i-la-language class="icon-footer" />
        </button>
      </el-tooltip>
  
      <el-tooltip :content="t('nsfw')" placement="top">
        <router-link class="icon-btn mx-2" to="/nsfw">
          <i-ri-article-line class="icon-footer" />
        </router-link>
      </el-tooltip>

    </div>
  </template>
  
  <script setup lang="ts">
  import { isDark, toggleDark } from '@/utils/dark';
  
  const { t, availableLocales, locale } = useI18n();
  const toggleLocales = () => {
    const locales = availableLocales;
    locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
  };
  </script>
  
  <style lang="scss">
  .icon-footer {
    font-size: 1.3em;
  }
  </style>