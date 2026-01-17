<script setup lang="ts">
import { gsap } from "gsap";
import {
  watch,
  ref,
  onMounted,
  onUnmounted,
  nextTick,
  useTemplateRef,
} from "vue";
import { ChevronRight } from "lucide-vue-next";

import items from "@/consts/navbar-items";
import socials from "@/consts/social-items";

let activeClass = ref(false);
let containerRef = useTemplateRef("container-ref");
let userScrolledUp = ref(true);
let oldY = ref(0);
let navbarHovered = ref(false);

onMounted(() => {
  window.addEventListener("scroll", watchScroll);
});

function isMobile(): boolean {
  return window.innerWidth <= 760;
}

let lastDirectionScrolled = ref("");
let prevValue = ref(0);

function watchScroll() {
  if (prevValue.value > window.scrollY) {
    userScrolledUp.value = true;
  } else {
    userScrolledUp.value = false;
  }
  prevValue.value = window.scrollY;
}
</script>

<template>
  <nav ref="container-ref" class="fixed z-[1000] top-0 left-0 w-full">
    <ul
      class="flex justify-center items-center bg-[#121113] text-white p-8 gap-12 flex-col md:flex-row opacity-0 transition-opacity md:mx-24"
      :class="{ active: userScrolledUp }"
    >
      <router-link
        v-for="(item, index) in items"
        :id="Object.keys(item)[0]"
        :to="Object.values(item)[0]"
        :key="Object.keys(item)[0] + index"
        class="text-sm nav-item gap-2 w-min"
      >
        {{ Object.keys(item)[0] }}
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
.nav-item,
.nav-social {
  position: relative;
}

.active {
  opacity: 1;
  display: flex;
}

.nav-item:hover::before,
.nav-social:hover::before {
  position: absolute;
  top: 25%;
  left: 70%;
  background-color: #95a99f9b;
  content: "";
  width: 24px;
  height: 14px;
}
</style>
