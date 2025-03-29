<script setup>
import { Package, Layout, SquareTerminal } from 'lucide-vue-next';

</script>


<template>
  <section class="about-section py-28 md:px-[9em] flex flex-col items-center justify-center ">
    <div>
      <h1 class="text-4xl sm:text-7xl font-black text-green-300">
        <span class="text-[#1c1c1c]">/</span>skills
      </h1>
    </div>
    <div class="w-full flex flex-col gap-8 text-sm sm:text-lg max-w-2xl self-start">
      <div class="w-full text-white gap-8 rounded-2xl p-4 flex flex-col justify-center">
        <h1 class="flex items-center gap-2 text-5xl text-green-300 font-bold text-start tracking-tight">
          <Package size=40 /> Backend

        </h1>
        <p class="text-start">
          With experience on
          Java
          Springboot
          NestJS,
          ExpressJS
          PostgreSQL
          Prisma ORM, I've been able to build complete Web Apps.
        </p>
      </div>
      <div class="w-full text-white gap-8 rounded-2xl p-4 flex flex-col justify-center">
        <h1 class="text-5xl text-green-300 font-bold text-start tracking-tight flex  gap-2">
          <Layout size=40 />
          Frontend
        </h1>
        <p class="text-start">
          All the Web Apps built by me are designed, maintained and developed by me.
          Using tools like React on its majority, VueJS as a second tool and Typescript under the
          hood because of its readability and static-typed-like
          developing.
        </p>
      </div>
      <div class="w-full text-white gap-8 rounded-2xl p-4 flex flex-col justify-center">
        <h1 class="text-5xl text-green-300 font-bold text-start tracking-tight flex gap-2">
          <SquareTerminal size=40 />
          Linux
        </h1>
        <p class="text-start">
          As a person that likes "freedom" when coming to personal environments and work
          environments, I've discovered Linux like 3-2 years ago, it
          was my main OS for 1-2 years. I've explored various distros
          like GNOME, KDE and Arch which was my main
          distro along with the the i3 DE.
        </p>
      </div>
    </div>
  </section>

</template>

<style lang="css"></style>
