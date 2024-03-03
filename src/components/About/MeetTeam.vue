<template>
  <div class="w-full bg-cover bg-no-repeat h-auto text-center bg-[url('@/assets/about/2024-Team60.png')]">
    <h1 class="mx-auto my-36 text-white text-4xl font-semibold">Meet the Team</h1>
  </div>

  <div class="w-2/3 mx-auto text-center">
    <p class="text-center text-2xl font-bold my-12">
      Leadership
    </p>
    <h3 class="font-semibold text-xl">
      {{ TeamPM[0].name }}
      <a v-if="TeamPM[0].linkedinURL" :href="TeamPM[0].linkedinURL" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    </h3>
    <p>{{ TeamPM[0].role }}</p>
    <p class="text-xs">{{ TeamPM[0].major }}</p>

    <div class="grid grid-cols-2 w-2/3 mx-auto my-6 gap-x-8">
      <div class="w-full">
        <h3 class="font-semibold text-xl">
          {{ MechLead[0].name }}
          <a v-if="MechLead[0].linkedinURL" :href="MechLead[0].linkedinURL" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </h3>
        <p>{{ MechLead[0].role }}</p>
        <p class="text-xs">{{ MechLead[0].major }}</p>
      </div>
      <div class="w-full">
        <h3 class="font-semibold text-xl">
          {{ ElecLead[0].name }}
          <a v-if="ElecLead[0].linkedinURL" :href="ElecLead[0].linkedinURL" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </h3>
        <p>{{ ElecLead[0].role }}</p>
        <p class="text-xs">{{ ElecLead[0].major }}</p>
      </div>
    </div>
  </div>

  <div class="w-2/3 mx-auto text-center">
    <p class="text-center text-2xl font-bold mt-12 mb-4">
      Subteams
    </p>
  </div>
  <div class="grid grid-cols-2 w-1/2 mx-auto">
    <div class="w-full text-left">
      <p class="text-2xl font-semibold mt-12 underline underline-2 decoration-aggie-maroon">
        Aerodynamics
      </p>

      <div class="mb-4" v-for="member in FullTeam.Aerodynamics" :key="member.name">
        <h3 class="font-semibold text-lg">
          {{ member.name }}
          <a v-if="member.linkedinURL" :href="member.linkedinURL" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </h3>
        <p>{{ member.role }}</p>
        <p class="text-xs">{{ member.major }}</p>
      </div>
    </div>
    <div class="w-full text-right">
      <p class="text-2xl font-semibold mt-12 underline underline-2 decoration-aggie-maroon">
        Battery
      </p>

      <div class="mb-4" v-for="member in FullTeam.Battery" :key="member.name">
        <h3 class="font-semibold text-lg">
          <a v-if="member.linkedinURL" :href="member.linkedinURL" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          {{ member.name }}
        </h3>
        <p>{{ member.role }}</p>
        <p class="text-xs">{{ member.major }}</p>
      </div>
    </div>

    <div class="w-full text-left">
      <p class="text-2xl font-semibold mt-12 underline underline-2 decoration-aggie-maroon">
        Chassis
      </p>

      <div class="mb-4" v-for="member in FullTeam.Chassis" :key="member.name">
        <h3 class="font-semibold text-lg">
          {{ member.name }}
          <a v-if="member.linkedinURL" :href="member.linkedinURL" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </h3>
        <p>{{ member.role }}</p>
        <p class="text-xs">{{ member.major }}</p>
      </div>
    </div>
    <div class="w-full text-right">
      <p class="text-2xl font-semibold mt-12 underline underline-2 decoration-aggie-maroon">
        Electronics
      </p>

      <div class="mb-4" v-for="member in FullTeam.Electronics" :key="member.name">
        <h3 class="font-semibold text-lg">
          <a v-if="member.linkedinURL" :href="member.linkedinURL" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          {{ member.name }}
        </h3>
        <p>{{ member.role }}</p>
        <p class="text-xs">{{ member.major }}</p>
      </div>
    </div>

    <div class="w-full text-left">
      <p class="text-2xl font-semibold mt-12 underline underline-2 decoration-aggie-maroon">
        Powertrain
      </p>

      <div class="mb-4" v-for="member in FullTeam.Powertrain" :key="member.name">
        <h3 class="font-semibold text-lg">
          {{ member.name }}
          <a v-if="member.linkedinURL" :href="member.linkedinURL" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </h3>
        <p>{{ member.role }}</p>
        <p class="text-xs">{{ member.major }}</p>
      </div>
    </div>
    <div class="w-full text-right">
      <p class="text-2xl font-semibold mt-12 underline underline-2 decoration-aggie-maroon">
        Suspension
      </p>

      <div class="mb-4" v-for="member in FullTeam.Suspension" :key="member.name">
        <h3 class="font-semibold text-lg">
          <a v-if="member.linkedinURL" :href="member.linkedinURL" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          {{ member.name }}
        </h3>
        <p>{{ member.role }}</p>
        <p class="text-xs">{{ member.major }}</p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { FullTeam } from "@/data/team/2024.ts";
import {computed} from "vue";

const TeamPM = computed(() => {
  return FullTeam.Leads.filter((member) => member.role === "Project Manager");
});

const MechLead = computed(() => {
  return FullTeam.Leads.filter((member) => member.role === "Mechanical Chief");
});

const ElecLead = computed(() => {
  return FullTeam.Leads.filter((member) => member.role === "Electrical Chief");
});
</script>