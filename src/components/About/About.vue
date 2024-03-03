<template>
    <div class="flex flex-col justify-items-center grid">
    <!-- about us tag and picture -->
        <div class="bg-[url('@/assets/banner50.jpg')] w-full h-auto bg-cover bg-no-repeat justify-items-center grid bg-center">

            <div class="w-80 h-24 text-center pt-6 my-24 flex flex-col">
                <p1 class="text-5xl font-semibold pb-1 text-white">
                    About Us
                </p1>
                <p1 class="text-xl text-gray-200">
                    Our Vision/Program Goal
                </p1>
            </div>



        </div>

        <VisionPurpose class="my-12"></VisionPurpose>
        <MeetTeam></MeetTeam>


    </div>
</template>

<script setup lang="ts">
    import MeetTeam from './MeetTeam.vue';
    import VisionPurpose from './VisionPurpose.vue';
</script>