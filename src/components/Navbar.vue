<script setup lang="ts">
import { gsap } from 'gsap'
import { watch, ref, onMounted, onUnmounted, nextTick, useTemplateRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import items from '@/consts/navbar-items'
import socials from '@/consts/social-items'

let activeClass = ref(isMobile())
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
let animationTriggered = ref(false) // Variable para controlar la ejecución única de la animación

watch(currentPosition, (newValue) => {
  if (newValue > 0 && !animationTriggered.value) {
    // Solo se ejecuta una vez
    valueIsNotZero.value = true
    animationTriggered.value = true // Marca que la animación ya se ha ejecutado

    let tl = gsap.timeline({})
    tl.fromTo('.t', { x: '0', rotate: 0, duration: 1 }, { x: '-100', rotate: 90, duration: 1 }, 0)
  }
})
function handleClickOutside(e) {
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
  <nav class="fixed z-[1000] flex md:flex-row py-8 justify-between
    items-center mx-auto w-full transition-all top-0 left-0 px-[20px]
    md:px-[6em] !bg-transparent" ref='container-ref' :class="{
      navbaractive: userScrolledUp,
      navbarinactive: !userScrolledUp,
    }" @mouseover="navbarHovered = true" @mouseleave="navbarHovered = false">

    <router-link to="/" class="pointer !border-none text-4xl font-bold text-[#86EFAC] nav-logo transition-all"
      :class="{ active: activeClass, scrolledNavLogo: !userScrolledUp }">stira<span
        class="text-[#1c1c1c] t">t</span>to</router-link>

    <button class="hamburguer" :class="{ active: activeClass }" @click="activeClass = !activeClass"></button>

    <transition @enter="onEnter" @leave="onLeave">
      <ul v-if="activeClass" id="nav-list"
        class="absolute right-[50px] top-[10px] flex shadow-xl flex-col items-center justify-center bg-[#1c1c1c] text-white p-16">
        <div class="flex flex-col items-start justify-center navItemsDiv">
          <router-link v-for="(item, index) in items" :id="Object.keys(item)[0]" :to="Object.values(item)[0]"
            :key="Object.keys(item)[0] + index" class="text-lg p-2 nav-item">
            {{ Object.keys(item)[0] }}
          </router-link>
        </div>
        <span class="font-bold tracking-widest mt-8">social</span>
        <div class="navSocialsDiv">
          <a v-for="(item, index) in socials" :id="Object.keys(item)[0]" :href="Object.values(item)[0]"
            :key="Object.keys(item)[0] + index" class="text-lg p-2 nav-social">
            {{ Object.keys(item)[0] }}
          </a>
        </div>
      </ul>
    </transition>
  </nav>
</template>

<style scoped>
.scrolledNavLogo {
  color: transparent;
  visibility: hidden;
}

.scrolledNavLogo span {
  -webkit-text-stroke: 0.5px #86efac;
  background: linear-gradient(#86efac 0 100%) left / 0 no-repeat;
  color: transparent;
  background-clip: text;
  visibility: visible;
  position: absolute;
}

.nav-item,
.nav-social {
  position: relative;
}

.nav-item:hover::before,
.nav-social:hover::before {
  position: absolute;
  top: 25%;
  left: 70%;
  background-color: #3523a68b;
  content: '';
  width: 24px;
  height: 14px;
}

.hamburguer {
  z-index: 1000;
  position: relative;
  top: 0px;
  right: 0px;
  content: '';
  width: 30px;
  height: 30px;
  background-color: transparent;
  transition: 0.3s ease;
}

.hamburguer::before {
  z-index: 1000;
  position: absolute;
  top: -10px;
  right: 0px;
  content: '';
  width: 30px;
  height: 2px;
  margin-top: 20px;
  background-color: #86efac;
  transition: 0.3s ease;
  pointer-events: none;
}

.hamburguer::after {
  z-index: 1000;
  position: absolute;
  right: 0px;
  top: 20px;
  content: '';
  width: 20px;
  height: 2px;
  background-color: #86efac;

  transition: 0.3s ease;
  pointer-events: none;
  /* Permite que el contenedor maneje el hover */
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
    /* Asegura que el contenido de nav-list se muestre */
    justify-items: center;
    align-items: center;
    /* Alinea los elementos al centro */
  }
}

.inactive {
  overflow: auto;
  opacity: 0;
}

.active {
  overflow: hidden;
  opacity: 1;
}

.hamburguer:hover::after {
  width: 30px;
}

.hamburguer.active::before {
  transform: rotate(45deg);
  /* La barra superior rota */
  top: -10px;
}

.hamburguer.active::after {
  width: 30px;
  transform: rotate(-45deg);
  /* Ejemplo de movimiento hacia arriba */
  top: 10px;
  /* Se mueve hacia arriba */
}
</style>
