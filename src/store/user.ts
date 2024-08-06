import { ref } from 'vue';
import store from '../store';
import { defineStore } from 'pinia';

import { getItem } from '../utils/localStorage';

export const useUserStore = defineStore('user', () => {
  const accessToken = ref<string>(getItem('accessToken') || '');
  const refreshToken = ref<string>(getItem('refreshToken') || '');
  const email = ref<string>(getItem('email') || '');

  return { accessToken, refreshToken, email };
});

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store);
}
