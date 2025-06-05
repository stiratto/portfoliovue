<script setup lang="ts">
const footerItems = [{ Github: "https://github.com/stiratto/" }]
</script>

<template>
  <footer class=" flex flex-col px-8 sm:px-24 justify-center
                 gap-8 text-2xl
   text-[#95a99f] border-t py-8 border-[#ffdd33]">
    <div class="flex flex-col sm:flex-row sm:items-center justify-around">
      <div class="flex flex-col">
        <span class="uppercase text-[#ffdd33] text-sm monospace tracking-widest">Send me a message!</span>
        <a class="text-lg break-all"
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=moranmoralesj4@gmail.com"
          target="_blank">moranmoralesj4@gmail.com</a>
      </div>

    </div>
    </br>
    <div class='flex flex-col items-center justify-around text-lg'>
      <p>© Jesus Moran 2024</p>
      <ul class='flex gap-8'>
        <a v-for="(item, index) in footerItems" :href="Object.values(item)[0]" class="pointer" target="_blank"
          :key="index">{{ Object.keys(item)[0] }}</a>

      </ul>
    </div>
  </footer>
</template>
