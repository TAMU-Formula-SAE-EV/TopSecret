<template>
    <div class="grid grid-row-3 mt-7 mb-7 gap-3">

        <img src="@/assets/footer/logo_black.png" class="mx-auto w-40">

        <div class="flex items-center justify-center space-x-12">
            <img 
                :src="currentImage"
                @mouseover="handleMouseOver"
                @mouseleave="handleMouseLeave"
                class="w-40"
            >
            <div class="text-2xl text-extrabold">/</div>
            <img src="@/assets/footer/linkedin.png" class="w-20 mx-auto">
            <div class="text-2xl text-extrabold">/</div>
            <img src="@/assets/footer/youtube_bw.png" class="w-20 mx-auto">
        </div>

        <div class="grid grid-cols-6 gap-1 text-sm text-gray-600">
            <div class="">Cars</div>
            <div class="">TAMU SAE</div>
            <div class="">SAE</div>
            <div class="">Join the team</div>
            <div class="">Donate</div>
            <div class="">Report an issue</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const hovering = ref(false);
const currentImage = ref('@/assets/footer/insta.png');

const handleMouseOver = () => {
  hovering.value = true;
  currentImage.value = '@/assets/footer/insta_color.png';
};

const handleMouseLeave = () => {
  hovering.value = false;
  currentImage.value = '@/assets/footer/insta.png';
};
</script>

<style scoped>

</style>