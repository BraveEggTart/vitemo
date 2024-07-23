<template>
    <EnReadme v-if="locale === 'en'"></EnReadme>
    <ZhReadme v-else></ZhReadme>
  </template>
  
  <script setup lang="ts">
  const { locale } = useI18n();
  </script>