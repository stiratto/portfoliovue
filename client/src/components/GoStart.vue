<script setup lang="ts">
import { MoveUp } from 'lucide-vue-next'
import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('scroll', displayBtn)
})

function goto() {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
}

function displayBtn() {
  let btn = document.querySelector('.upBtn')

  if (btn !== null) {
    if (window.scrollY === 0) {
      btn.classList.add('hidden')
    } else {
      btn.classList.remove('hidden')
    }
  }
}
</script>

<template>
  <button
    @click="goto"
    class="upBtn fixed bottom-4 right-4 p-4 bg-[#1c1c1c] hover:bg-purple-500 z-[5000]"
  >
    <MoveUp />
  </button>
</template>
