<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import GoStart from "@/components/GoStart.vue";
import Lenis from "lenis";
import { onMounted, onUnmounted } from "vue";
</script>

<template>
  <main class="mt-[18rem] md:mt-[8rem]">
    <go-start></go-start>
    <navbar></navbar>
    <router-view></router-view>
  </main>
  <Footer />
</template>
