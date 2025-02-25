<script setup lang="ts">
const footerItems = [{Twitter: "https://x.com/stirattou"}, {Github: "https://github.com/stiratto/"}]
</script>

<template>
  <footer class="h-screen flex flex-col px-8 sm:px-24 justify-evenly text-2xl
    bg-[#111111] text-[#86EFAC]">
    <div class="flex flex-col sm:flex-row sm:items-center justify-around">
      <div class="flex flex-col">
        <span
          class="uppercase text-green-300 text-sm monospace tracking-widest"
          >Send me a message!</span
        >
        <a
            class="text-lg break-all"
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=moranmoralesj4@gmail.com"
          target="_blank">moranmoralesj4@gmail.com</a>
      </div>

    </div>
    </br>
    <div class='flex flex-col items-center justify-around text-lg'>
      <p>© Jesus Moran 2024</p>
      <ul class='flex gap-8'>
        <a v-for="(item, index) in footerItems "
           :href="Object.values(item)[0]"
           class="pointer"
           target="_blank"
            :key="index">{{Object.keys(item)[0]}}</a>

      </ul>
    </div>
  </footer>
</template>
