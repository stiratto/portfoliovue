<script setup>
import { Package, Layout, SquareTerminal, Bot } from 'lucide-vue-next';
import skillslist from '../consts/skills-list.ts'


</script>


<template>
  <section class="about-section py-28 md:px-[9em] flex flex-col
    items-center justify-center border border-[#5f8787]">
    <div>
      <h1 class="!text-4xl sm:!text-7xl font-black text-[#c37648]">
        <span class="text-[#95a99f]">/</span>skills
      </h1>
    </div>
    <div class="w-full flex flex-col gap-8 text-sm sm:text-lg max-w-2xl self-start">
      <div v-for="skill in skillslist" class="w-full text-white gap-8 rounded-2xl p-4 flex flex-col justify-center">
        <h3 class="flex items-center gap-2 text-5xl text-[#c37648]
          font-bold text-start tracking-tight text-3xl">
          <component :is="skill.skilltitleicon" class="w-12 h-12
          " />

          {{ skill.skilltitle }}
        </h3>
        <p class="text-start text-white">
          {{ skill.skilldescription }}
        </p>
      </div>




    </div>
  </section>

</template>

<style lang="css"></style>
