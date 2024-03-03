<template>
  <div
      class="fixed top-0 left-0 w-screen h-screen opacity-0 invisible z-50 transition-all"
  >
    <div
        class="top-0 left-0 w-full h-full absolute bg-black bg-opacity-80 content-['']"
        @click="$emit('toggle')"
    ></div>
    <div
        class="mobile-menu-inner relative w-[400px] max-w-[80%] h-full text-left bg-white -translate-x-full transition-all shadow-lg"
    >
      <button
          aria-label="Settings"
          class="absolute top-0 right-0 w-16 h-16 text-2xl text-black"
          @click="$emit('toggle')"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="h-full overflow-y-auto py-10">
        <div class="px-5 py-8">
          <div class="menu-navigation">
            <ul class="mobile-menu">
              <li class="mb-1.5 relative group border-b border-gray-200 pb-2">
                <router-link @click="$emit('toggle')" to="/" class="font-semibold leading-9 capitalize text-black">
                  Home
                </router-link>
              </li>
              <li class="mb-1.5 relative group border-b border-gray-200 pb-2">
                <router-link @click="$emit('toggle')" to="/About" class="font-semibold leading-9 capitalize text-black">
                  About
                </router-link>
              </li>
              <li class="mb-1.5 relative group border-b border-gray-200 pb-2">
                <router-link @click="$emit('toggle')" to="/" class="font-semibold leading-9 capitalize text-black">
                  Gallery
                </router-link>
              </li>
              <li class="mb-1.5 relative group border-b border-gray-200 pb-2">
                <router-link @click="$emit('toggle')" to="/" class="font-semibold leading-9 capitalize text-black">
                  Sponsor
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["toggle"]);
</script>

<style scoped>
.submenu.active {
  @apply block;
}

.submenu-toggle.active i {
  @apply -rotate-180 inline-block transition-all;
}

.mobile-menu-inner {
  @apply transform-none;
}
</style>