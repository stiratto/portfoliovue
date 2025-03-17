<script setup lang="ts">
import { defineProps } from 'vue'
import { MoveUpRight } from 'lucide-vue-next'
import { Github } from 'lucide-vue-next'
import type { PropType } from 'vue'

interface Tag {
  label: string
  icon: any
}

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  tags: { type: Array as PropType<Tag[]>, required: false },
  page: { type: String, required: false },
  github: { type: String, required: false },
})
</script>

<template>
  <div class="group relative overflow-hidden shadow-md hover:shadow-xl">
    <div class="absolute top-0 -0 right-0 z-20 w-full h-full opacity-50 bg-black"></div>
    <div class="relative">
      <img :src="thumbnail"
        class="thumbnail-project object-cover aspect-square md:aspect-[16/9] md:max-w-4xl scale-150 rounded-xl group-hover:scale-105 transition-all" />
    </div>

    <div class="absolute bottom-0 left-0 right-0 px-6 md:py-6 mb-8 flex flex-col gap-4 justify-end z-50 word-wrap">
      <h1 className="text-2xl  md:text-5xl font-bold 
        text-[#86EFAC] ">
        {{ title }}
      </h1>
      <p class="max-w-lg text-sm">{{ description }}</p>
      <ul class="flex gap-4 break-all">
        <li v-for="(tag, index) in tags" :key="index"
          class="tag flex gap-2 items-center p-2 text-sm rounded-full bg-[#111111]">
          <span>{{ tag.label }}</span>
          <component :is="tag.icon" class="w-4 h-4" />
        </li>
      </ul>
      <div class="flex gap-2 justify-between">
        <a :href="github" class="flex items-center gap-2 cursor-pointer item">
          <github class="w-4 h-4"></github>View code
        </a>

        <a :href="page" class="flex items-center gap-2 cursor-pointer item">
          <move-up-right class="w-4 h-4"></move-up-right> Live view
        </a>
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
