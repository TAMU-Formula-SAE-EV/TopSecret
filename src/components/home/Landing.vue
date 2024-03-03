<template>
    <div v-if="mainStore.spooky" class="bg-[url('@/assets/home/crazy-wallpaper.png')] w-full bg-cover pb-16 bg-no-repeat bg-opacity-50">
        <div class="pt-96 pl-12 flex-col flex text-left">
            <p1 class="text-white font-semibold text-4xl pb-2">
                Texas A&M Formula SAE EV 2024
            </p1>
            <p1 class="pb-3 text-gray-200">
                "Design for testing time and quality."
            </p1>
            <div class="flex-row flex">
                <div class="pr-4">
                    <button class="bg-white outline-color-white rounded-2xl h-fit py-3 w-fit px-8 text-l font-medium flex hover:scale-105 transition duration-200"
                  :class="mainStore.spooky ? 'text-black':''">
                        Sponsor or Donate
                    </button>
                </div>
                <button class="outline rounded-2xl h-fit py-3 w-fit px-8 text-l font-medium flex color-white text-white hover:scale-105 transition duration-200">
                    Join Our Mailing List
                </button>
            </div>
        </div>
    </div>
  <div v-else class="bg-[url('@/assets/home/rsz_landingpage50.png')] w-full bg-cover pb-16 bg-no-repeat bg-opacity-50">
    <div class="pt-96 pl-12 flex-col flex text-left">
      <p1 class="text-white font-semibold text-4xl pb-2">
        Texas A&M Formula SAE EV 2024
      </p1>
      <p1 class="pb-3 text-gray-200">
        "Design for testing time and quality."
      </p1>
      <div class="flex-row flex">
        <div class="pr-4">
          <button class="bg-white outline-color-white rounded-2xl h-fit py-3 w-fit px-8 text-l font-medium flex hover:scale-105 transition duration-200"
                  :class="mainStore.spooky ? 'text-black':''">
            Sponsor or Donate
          </button>
        </div>
        <button class="outline rounded-2xl h-fit py-3 w-fit px-8 text-l font-medium flex color-white text-white hover:scale-105 transition duration-200">
          Join Our Mailing List
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store";

const mainStore = useMainStore();

</script>
