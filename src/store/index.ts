import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('main', () => {
    const spooky = ref<boolean>(false);

    return { spooky }
})