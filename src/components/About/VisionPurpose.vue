<template>
    <div class="flex flex-row">
        <div class="p-8 text-center">
            <h1 class="font-semibold text-4xl pb-4 text-aggie-maroon" :class="mainStore.spooky ? 'text-white decoration-sky-600' : 'decoration-aggie-maroon'">Our Purpose</h1>
            <p class="p-6 text-l text-center font-normal">The purpose of the Texas A&M Formula Electric FSAE Team is to develop high-quality engineers who excel in the field of sustainable transportation engineering, primarily through the hands-on design, manufacturing, and testing of an electric formula-style vehicle.</p>
        </div>
        <div class="p-8 text-center">
            <h1 class="font-semibold text-4xl pb-4 text-aggie-maroon" :class="mainStore.spooky ? 'text-white decoration-sky-600' : 'decoration-aggie-maroon'">Our Vision</h1>
            <p class="p-6 text-l text-center font-normal">
            Our vision is to produce the highest caliber of engineering students by designing, building, and competing with an award-winning electric racecar. Through continuous improvement, teamwork, and a commitment to engineering principles and safety, we strive to create a foundation for success.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store";

const mainStore = useMainStore();

</script>