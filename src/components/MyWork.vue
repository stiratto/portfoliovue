<template>
  <section class="links bg-[#111111] p-8 sm:px-24 w-full flex items-center justify-center gap-8">
    <div
      class="bg-[#111111] col-start-1 row-start-1 text-white gap-8 rounded-2xl flex flex-col justify-center w-max"
    >
      <h3 class="text-6xl sm:text-8xl text-green-300 font-bold text-start tracking-tight">
        My work
      </h3>
      <p class="text-sm sm:text-lg">E-Commerces, Blogs, etc.</p>
      <router-link
        to="/projects"
        class="w-max border p-2 hover:bg-green-300 hover:text-[#1c1c1c] transition-all"
      >
        See my projects
      </router-link>
    </div>
  </section>
</template>
