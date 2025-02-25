<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import GoStart from '@/components/GoStart.vue'
import Lenis from 'lenis'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true, // Activar desplazamiento suave con el mouse
    duration: 1.2, // Duración del desplazamiento
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efecto de suavizado
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})
</script>

<template>
  <main>
    <go-start></go-start>
    <navbar></navbar>
    <router-view></router-view>
  </main>
  <Footer />
</template>
