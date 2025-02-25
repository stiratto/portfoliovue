<script setup>
import Project from '@/components/Project.vue'
import projects from '@/consts/projectslist.ts'
</script>

<template>
  <div class="p-8 sm:px-[9em] flex flex-col justify-center items-center gap-8">
    <h1 class="text-4xl sm:text-7xl font-black text-green-300">
      <span class="text-[#1c1c1c]">/</span>projects
    </h1>
    <project
      v-for="(project, index) in projects"
      v-bind="project"
      :key="index"
          ></project>
  </div>
</template>
