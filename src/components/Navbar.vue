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
    <div
      class="flex flex-col justify-between mx-auto w-full transition-all top-0 left-0 !bg-[#080808] md:px-24"
    >
      <router-link
        to="/"
        class="pointer text-sm text-center py-2 text-[#95a99f] nav-logo transition-all border border-[#ffdd33]"
      >
        stiratto's portfolio
        <div class="navSocialsDiv">
          <a
            v-for="(item, index) in socials"
            :id="Object.keys(item)[0]"
            :href="Object.values(item)[0]"
            :key="Object.keys(item)[0] + index"
            class="p-2 nav-social"
            target="_blank"
          >
            {{ Object.keys(item)[0] }}
          </a>
        </div>
      </router-link>
    </div>
    <ul
      class="flex shadow-xl bg-[#080808] text-white border-b border-[#ffdd33] p-8 gap-12 flex-col md:flex-row opacity-0 transition-opacity md:mx-24"
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
