<template>
  <!-- <div class="w-full text-center bg-aggie-maroon py-16">
    <h1 class="font-semibold text-3xl underline-offset-3 underline decoration-2 text-white" :class="mainStore.spooky ? 'text-white decoration-sky-600' : 'decoration-aggie-maroon'">Our Purpose</h1>
    <div class="grid grid-cols-2 mt-10 mx-36">
      <div class="p-6">
        <img src="@/assets/2024-Team.jpg" class="outline outline-white rounded-xl outline-4 ">
      </div>
      <p class="p-6 text-xl text-white text-left">The purpose of the Texas A&M Formula Electric FSAE Team is to develop high-quality engineers who excel in the field of sustainable transportation engineering, primarily through the hands-on design, manufacturing, and testing of an electric formula-style vehicle.
        <br><br>
      Our vision is to produce the highest caliber of engineering students by designing, building, and competing with an award-winning electric racecar. Through continuous improvement, teamwork, and a commitment to engineering principles and safety, we strive to create a foundation for success.
      </p>
    </div>
  </div> -->

  <div class="w-full bg-cover bg-no-repeat h-auto text-center bg-[url('@/assets/about/2024-Team60.png')]">
    <h1 class="mx-auto my-36 text-white text-4xl font-semibold">Meet the Team</h1>
  </div>

  <div class="flex flex-col w-full px-48">
    <h1>Project Manager</h1>
    <div class="flex flex-row justify-between">
      <p>Gerry Mullins</p>
      <p>Mechatronics</p>
    </div>
    <div class="flex flex-row">
      
    </div>
  </div>

</template>

<script setup lang="ts">
import { useMainStore } from "@/store";

const mainStore = useMainStore();
</script>