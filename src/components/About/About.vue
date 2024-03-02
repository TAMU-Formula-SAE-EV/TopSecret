<template>
    <div class="flex flex-col justify-items-center grid">
    <!-- about us tag and picture -->
        <div class="bg-[url('@/assets/banner.jpg')] w-full h-auto bg-cover bg-no-repeat justify-items-center grid">
            <div class="bg-white rounded-t-3xl w-80 h-24 text-center pt-6 mt-48 flex flex-col"> <!-- rectangle !-->
                <p1 class="text-2xl font-medium pb-1">
                    About Us
                </p1>
                <p1 class="text-xs text-gray-400">
                    Our Vision/Program Goal
                </p1>
            </div>
        </div>

        <!-- design quote -->
        <div class="outline outline-gray-300 rounded-3xl outline-[20px] w-auto h-48 flex flex-col text-center mt-20 py-5 px-16 relative text-aggie-maroon">
            <p class="mb-4 text-4xl font-semibold italic">
                "
            </p>
            <p class="text-3xl font-semibold italic mb-4">
                Design for testing time and quality.
            </p>
            <p class="text-m text-gray-500 mb-2 ">
                -AME '24
            </p>
            <div class="absolute -top-5 left-0 right-0 h-5 w-72 bg-white mx-auto"></div>
            <div class="absolute -bottom-5 left-0 right-0 h-5 w-72 bg-white mx-auto"></div>
        </div>
        
        <MeetTeam class="mt-16"></MeetTeam>

    </div>
</template>

<script setup lang="ts">
    import MeetTeam from './MeetTeam.vue';
</script>