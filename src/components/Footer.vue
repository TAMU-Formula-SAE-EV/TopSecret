<template>
  <div v-if="mainStore.spooky" class="grid grid-row-3 pt-7 pb-7 gap-3 bg-black">

    <img src="@/assets/logo.png" class="mx-auto  w-40">

    <div class="flex items-center justify-center space-x-8">
      <a href="https://www.instagram.com/tamuformulaelectric/">
      <img
          :src="currentImageSpook"
          @mouseover="handleMouseOverSpook"
          @mouseleave="handleMouseLeaveSpook"
          class="w-20 transition-opacity duration-300"
          :class="{ 'opacity-50': hoveringSpook }"
      >
      </a>
      <div class="text-2xl text-extrabold text-white">/</div>
      <a href="https://www.linkedin.com/company/texas-a-m-fsae-electric-racing/mycompany/">
      <img
          :src="currentImageSpook_"
          @mouseover="handleMouseOverSpook_"
          @mouseleave="handleMouseLeaveSpook_"
          class="w-20 transition-opacity duration-300"
          :class="{ 'opacity-50': hoveringSpook_ }"
      >
      </a>
      <div class="text-2xl text-extrabold text-white">/</div>
      <a href="https://www.youtube.com/@tamuformulaelectric/featured">
      <img
          :src="currentImageSpook__"
          @mouseover="handleMouseOverSpook__"
          @mouseleave="handleMouseLeaveSpook__"
          class="w-20 transition-opacity duration-300"
          :class="{ 'opacity-50': hoveringSpook__ }"
      >
      </a>
    </div>

    <div class="grid grid-cols-6 gap-1 text-xs md:text-sm text-white text-gray-600 text-center pr-4">
      <div class="">Cars</div>
      <div class="">TAMU SAE</div>
      <div class="">SAE</div>
      <div class="">Join the team</div>
      <div class="">Donate</div>
      <div class="">Report an issue</div>
    </div>
  </div>

  <div v-else class="grid grid-row-3 pt-7 mb-7 gap-3">

    <img src="@/assets/footer/logo_black.png" class="mx-auto w-40">

    <div class="flex items-center justify-center space-x-8">
      <a href="https://www.instagram.com/tamuformulaelectric/">
      <img
          :src="currentImage"
          @mouseover="handleMouseOver"
          @mouseleave="handleMouseLeave"
          class="w-20 transition-opacity duration-300"
          :class="{ 'opacity-50': hovering }"
      >
      </a>
      <div class="text-2xl text-extrabold">/</div>
      <a href="https://www.linkedin.com/company/texas-a-m-fsae-electric-racing/mycompany/">
      <img
          :src="currentImage_"
          @mouseover="handleMouseOver_"
          @mouseleave="handleMouseLeave_"
          class="w-20 transition-opacity duration-300"
          :class="{ 'opacity-50': hovering_ }"
      >
      </a>
      <div class="text-2xl text-extrabold">/</div>
      <a href="https://www.youtube.com/@tamuformulaelectric/featured">
      <img
          :src="currentImage__"
          @mouseover="handleMouseOver__"
          @mouseleave="handleMouseLeave__"
          class="w-20 transition-opacity duration-300"
          :class="{ 'opacity-50': hovering__ }"
      >
      </a>
    </div>

    <div class="grid grid-cols-6 gap-1 text-xs md:text-sm text-gray-600 text-center pr-4">
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

import { useMainStore } from "@/store";

const mainStore = useMainStore();

import { ref } from 'vue';
import img1 from '@/assets/footer/insta_bw.png'
import img2 from '@/assets/footer/insta_color.png'
import linkedin_c from "@/assets/footer/linkedin_color.png"
import linkedin_bw from "@/assets/footer/linkedin_bw.png"
import youtube_color from "@assets/footer/youtube_color.png"
import youtube_bw from "@/assets/footer/youtube_bw.png"
import insta_spooky from "@assets/footer/insta_spooky.png"
import youtube_spooky from "@assets/footer/youtube_spooky.png"
import linkedin_spooky from "@assets/footer/linkedin_spooky.png"

const hovering = ref(false);
const currentImage = ref(img1);

const handleMouseOver = () => {
  hovering.value = true;
  currentImage.value = img2;
};

const handleMouseLeave = () => {
  hovering.value = false;
  currentImage.value = img1;
};

const hovering_ = ref(false);
const currentImage_ = ref(linkedin_bw);

const handleMouseOver_ = () => {
  hovering_.value = true;
  currentImage_.value = linkedin_c;
};

const handleMouseLeave_ = () => {
  hovering_.value = false;
  currentImage_.value = linkedin_bw;
};

const hovering__ = ref(false);
const currentImage__ = ref(youtube_bw);

const handleMouseOver__ = () => {
  hovering__.value = true;
  currentImage__.value = youtube_color;
};

const handleMouseLeave__ = () => {
  hovering__.value = false;
  currentImage__.value = youtube_bw;
};

const hoveringSpook = ref(false);
const currentImageSpook = ref(insta_spooky);

const handleMouseOverSpook = () => {
  hoveringSpook.value = true;
  currentImageSpook.value = img2;
};

const handleMouseLeaveSpook = () => {
  hoveringSpook.value = false;
  currentImageSpook.value = insta_spooky;
};

const hoveringSpook_ = ref(false);
const currentImageSpook_ = ref(linkedin_spooky);

const handleMouseOverSpook_ = () => {
  hoveringSpook_.value = true;
  currentImageSpook_.value = linkedin_c;
};

const handleMouseLeaveSpook_ = () => {
  hoveringSpook_.value = false;
  currentImageSpook_.value = linkedin_spooky;
};

const hoveringSpook__ = ref(false);
const currentImageSpook__ = ref(youtube_spooky);

const handleMouseOverSpook__ = () => {
  hoveringSpook__.value = true;
  currentImageSpook__.value = youtube_color;
};

const handleMouseLeaveSpook__ = () => {
  hoveringSpook__.value = false;
  currentImageSpook__.value = youtube_spooky;
};

</script>

<style scoped>

</style>