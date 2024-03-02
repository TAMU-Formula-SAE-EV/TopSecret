<template>
    <div class="grid grid-cols-4 gap-3" :class="mainStore.spooky ? 'bg-black text-white' : 'text-black'">
        <!-- borders or nah???? -->
        <div class="mt-7 text-center text-sm font-semibold ">Power</div>
        <div class="mt-7 text-center text-sm font-semibold ">Top Speed</div>
        <div class="mt-7 text-center text-sm font-semibold ">Torque</div>
        <div class="mt-7 text-center text-sm font-semibold ">Battery Size</div>

        <div class="text-center text-2xl font-bold">75 kW</div>
        <div class="text-center text-2xl font-bold">80 MPH</div>
        <div class="text-center text-2xl font-bold">577 Nm</div>
        <div class="text-center text-2xl font-bold">7.8 kWh</div>

        <div class="mb-7 text-center text-sm">hopefully</div>
        <div class="mb-7 text-center text-sm">on E85</div>
        <div class="mb-7 text-center text-sm">at wheels</div>
        <div class="mb-7 text-center text-sm">if built correctly</div>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store";

const mainStore = useMainStore();
</script>