<script setup lang="ts">
import { gsap } from 'gsap'
import { watch, ref, onMounted, onUnmounted, nextTick, useTemplateRef } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

import items from '@/consts/navbar-items'
import socials from '@/consts/social-items'

let activeClass = ref(false)
let containerRef = useTemplateRef('container-ref')
let userScrolledUp = ref(true)
let oldY = ref(0)
let navbarHovered = ref(false)

// watches the active class, if the navbar changes to true
// add no-scroll so the user cannot scroll
// else, remove it
watch(activeClass, (newValue) => {
  return newValue
    ? document.body.classList.add('no-scroll')
    : document.body.classList.remove('no-scroll')
})

// add event listeners at mount
onMounted(() => {
  window.addEventListener('scroll', scrollNavbarHandler)
  window.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', handleResize)
})

// remove at unmount
onUnmounted((): void => {
  window.removeEventListener('scroll', scrollNavbarHandler)
  window.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', handleResize)
})

function isMobile(): boolean {
  return window.innerWidth <= 760
}

function handleResize(): void {
  activeClass.value = isMobile()
}

// animation when the user hides navbar
function onLeave(el: any) {
  let tl = gsap.timeline({ repeat: 2, repeatDelay: 0.3 })

  gsap.set('.navItemsDiv', { y: '0', opacity: 1 })

  tl.to('.navItemsDiv', {
    opacity: 0,
    y: '+=100',
    duration: 0.3,
  })

  gsap.set('.navSocialsDiv', { y: '0', opacity: 1 })

  tl.to('.navSocialsDiv', {
    opacity: 0,
    y: '+=100',
    duration: 0.3,
  })

  gsap.to(el, {
    width: 0,
    height: 0,
    duration: 0.3,
  })
}

// animation when user opens the navbar
function onEnter(el: any) {
  let tl = gsap.timeline({})
  gsap.set(el, { width: 0, height: 0 })

  if (isMobile()) {
    tl.to(el, {
      rotate: 0,
      width: '100%',
      height: '100%',
      duration: 0.3,
    })
  } else {
    tl.to(el, {
      width: 'auto',
      height: 'auto',
      duration: 0.3,
    })
  }
  gsap.set('.navItemsDiv', { y: '+=100', opacity: 0 })

  tl.to('.navItemsDiv', {
    opacity: 1,
    y: 0,
    duration: 0.3,
  })

  gsap.set('.navSocialsDiv', { y: '+=100', opacity: 0 })

  tl.to('.navSocialsDiv', {
    opacity: 1,
    y: 0,
    duration: 0.3,
  })
}

let currentPosition = ref(0)
let valueIsNotZero = ref(false)
let animationTriggered = ref(false)

watch(currentPosition, (newValue) => {
  if (newValue > 0 && !animationTriggered.value) {
    valueIsNotZero.value = true
    animationTriggered.value = true

    let tl = gsap.timeline({})
    tl.fromTo('.t', { x: '0', rotate: 0, duration: 1 }, { x: '-100', rotate: 90, duration: 1 }, 0)
  }
})
function handleClickOutside(e: any) {
  if (containerRef.value && !containerRef.value.contains(e.target)) {
    activeClass.value = false
  }
}

function scrollNavbarHandler(): void {
  currentPosition.value = window.scrollY
  let Y: number = window.scrollY
  if (Y < oldY.value) {
    navbarHovered.value = true
    userScrolledUp.value = true
  } else if (Y > oldY.value) {
    userScrolledUp.value = false
    navbarHovered.value = false
  }

  oldY.value = Y
}
</script>

<template>
  <nav class="z-[1000] flex flex-col justify-between mx-auto
       w-full transition-all top-0 left-0 !bg-[#080808] fixed px-24" ref="container-ref" :class="{
        navbaractive: userScrolledUp,
        navbarinactive: !userScrolledUp,
      }" @mouseover="navbarHovered = true" @mouseleave="navbarHovered = false">
    <router-link to="/" class="pointer text-sm text-center py-2
      text-[#95a99f] nav-logo transition-all border border-[#ffdd33]
      w-full">
      stiratto portfolio
      <div class="navSocialsDiv">
        <a v-for="(item, index) in socials" :id="Object.keys(item)[0]" :href="Object.values(item)[0]"
          :key="Object.keys(item)[0] + index" class="p-2 nav-social">
          {{ Object.keys(item)[0] }}
        </a>
      </div>
    </router-link>

    <ul id="nav-list" class="flex  shadow-xl
     text-white border-b border-[#ffdd33] p-8 gap-12">
      <router-link v-for="(item, index) in items" :id="Object.keys(item)[0]" :to="Object.values(item)[0]"
        :key="Object.keys(item)[0] + index" class="text-sm
          nav-item gap-2 ">
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

.nav-item:hover::before,
.nav-social:hover::before {
  position: absolute;
  top: 25%;
  left: 70%;
  background-color: #95a99f9b;
  content: '';
  width: 24px;
  height: 14px;
}




@media (max-width: 760px) {
  nav>ul {
    color: white;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 0px !important;
    right: 0%;
    display: flex;
    justify-items: center;
    align-items: center;
  }
}
</style>
