<script setup lang="ts">
import { defineProps } from "vue";
import { MoveUpRight } from "lucide-vue-next";
import { Github } from "lucide-vue-next";
import type { PropType } from "vue";

interface Tag {
  label: string;
  icon: any;
}

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  tags: { type: Array as PropType<Tag[]>, required: false },
  page: { type: String, required: false },
  client_code: { type: String, required: false },
  server_code: { type: String, required: false },
  github: { type: String, required: false }
});
</script>

<template>
  <div class="group relative overflow-hidden shadow-md hover:shadow-xl
    h-96 w-full">
    <div class="absolute top-0 -0 right-0 z-20 w-full h-full opacity-50 bg-black"></div>

    <div class="relative">
      <img :src="thumbnail" class="scale-150 rounded-xl group-hover:scale-105 transition-all w-full" />
    </div>

    <div class="absolute bottom-0 left-0 right-0 px-6 md:py-6 mb-8 flex flex-col gap-4 justify-end z-50 word-wrap">
      <h1 className="text-2xl  lg:text-5xl font-bold 
        text-[#ffdd33] ">
        {{ title }}
      </h1>
      <p class="text-sm text-white max-w-3xl truncate">{{ description }}</p>

      <div class="flex flex-col sm:flex-row gap-2 justify-between">
        <!-- if no github provided, show client and server code -->
        <div v-if="!github">
          <a :href="client_code" class="flex items-center gap-2 cursor-pointer item text-xs md:text-lg" target="_blank">
            <github class="w-4 h-4"></github>View client code
          </a>
          <a :href="server_code" class="flex items-center gap-2 cursor-pointer item text-xs md:text-lg" target="_blank">
            <github class="w-4 h-4"></github>View server code
          </a>
        </div>
        <!-- if github provided, only 1 repository-->
        <a v-else :href="github" class="flex items-center gap-2 cursor-pointer item text-xs md:text-lg" target="_blank">
          <github class="w-4 h-4"></github>View code
        </a>


        <a v-if="page" :href="page" class="flex items-center gap-2 cursor-pointer item" target="_blank">
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
  background-color: #95a99f8b;
  content: "";
  width: 14px;
  height: 14px;
}
</style>
