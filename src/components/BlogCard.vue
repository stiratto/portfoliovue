<script setup lang="ts">
import { defineProps } from 'vue'
import { MoveUpRight } from 'lucide-vue-next'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
})
</script>

<template>
  <div class="group relative overflow-hidden shadow-md hover:shadow-xl">
    <div class="absolute top-0 -0 right-0 z-20 w-full h-full opacity-50 bg-black"></div>
    <div class="relative">
      <img :src="thumbnail"
        class="thumbnail-project object-cover   w-[1200px] h-[400px] scale-150 rounded-xl group-hover:scale-105 transition-all" />
    </div>

    <div class="absolute bottom-0 left-0 right-0 px-6 md:py-6 mb-8 flex flex-col gap-4 justify-end z-50 word-wrap">
      <h1 className="text-2xl md:text-5xl font-bold 
        text-[#e78a53]">

        {{ title }}
      </h1>
      <p class="max-w-lg text-sm">{{ description }}</p>
      <div class="flex gap-2 justify-between">
        <router-link :to="{ name: 'blog', params: { name: title.toLowerCase().replace(/\s+/g, '-') } }"
          class="flex items-center gap-2 cursor-pointer item bg-black/50 text-white p-2">

          <move-up-right class="w-4 h-4"></move-up-right> See blog
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  position: relative;
}

.item:hover::before {
  z-index: 1000;
  position: absolute;
  top: 25%;
  left: 100%;
  background-color: #0000008b;
  content: '';
  width: 14px;
  height: 14px;
}
</style>
