<script setup>
import Project from "@/components/Project.vue";
import projects from "@/consts/projectslist.ts";
</script>

<template>
  <div
    class="p-8 lg:px-[9em] flex flex-col justify-center items-center gap-8 border border-[#5f8787]"
  >
    <h1 class="text-4xl lg:text-7xl font-black text-[#e78a53]">
      <span class="text-[#95a99f]">/</span>projects
    </h1>
    <project
      v-for="(project, index) in projects"
      v-bind="project"
      :key="index"
    ></project>
  </div>
</template>
