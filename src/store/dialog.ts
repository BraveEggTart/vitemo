import { defineStore } from 'pinia';

export const useDialogStore = defineStore({
  id: 'dialog',
  state: () => ({
    loginDialogVisible: false,
  }),
  actions: {
    openLoginDialog() {
      this.loginDialogVisible = true;
    },
    closeLoginDialog() {
      this.loginDialogVisible = false;
    },
  },
});
