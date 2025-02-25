<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Skills from '@/components/Skills.vue'
import MyWork from '@/components/MyWork.vue'
import DrawedLine from '@/assets/drawedline.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTemplateRef, ref, onMounted, onUnmounted } from 'vue'

const sectionWork = useTemplateRef<HTMLElement | null>('sectionWork')
const sectionSkills = useTemplateRef<HTMLElement | null>('sectionSkills')
const activeClass = ref<boolean | null>(false)

onMounted(() => {
  activeClass.value = true
})

function scrollTo(view: any) {
  view.scrollIntoView({ behavior: 'smooth' })
}

function onEnter(el: any) {
  const h1 = document.querySelector('.name-h1')
  let tl = gsap.timeline()

  tl.to('#full', { backgroundSize: '100%', duration: 4, ease: 'circ.inOut' }, 0)
}
</script>

<template>
  <section
    class="w-full relative flex flex-col lg:flex-row justify-between items-center py-8 sm:px-[9em] md:py-0 px-4 hero"
    ref="main"
  >
    <div class="h-[90vh] w-full text-white gap-8 rounded-2xl p-4 flex flex-col justify-center">
      <span
        class="relative top-4 font-bold w-min text-white text-sm tracking-widest before:content-[' '] before:w-full before:h-1 before:absolute before:top-4 before:bg-[#8CC63F]"
        >DEVELOPER</span
      >
      <transition
        tag="div"
        v-show="activeClass"
        @enter="onEnter"
        class="text-5xl md:text-8xl flex text-green-300 font-extrabold text-start"
      >
        <h1 id="full" class="tracking-tighter">
          Jesus <br />
          Moran
        </h1>
      </transition>
      <p class="lg:text-lg text-start max-w-sm">
        +3 años de experiencia. Ingeniero de Software de Maracaibo, Venezuela 🇻🇪. Especializado en
        el desarrollo de paginas.
      </p>

      <div class="flex gap-8 btn-div">
        <button class="btn-item uppercase text-sm tracking-widest" @click="scrollTo(sectionSkills)">
          Skills
        </button>
        <button class="btn-item uppercase text-sm tracking-widest" @click="scrollTo(sectionWork)">
          My Work
        </button>
      </div>
    </div>

    <img src="/person.svg" class="max-w-lg hidden md:block" />
  </section>

  <div ref="sectionSkills">
    <Skills></Skills>
  </div>

  <div ref="sectionWork">
    <MyWork />
  </div>
</template>

<style scoped>
.btn-item {
  padding: 10px;
  border-left: 2px solid #1c1c1c;
  position: relative;
}
.btn-item:hover::before {
  position: absolute;
  top: 25%;
  left: 100%;
  background-color: #0000006b;
  content: '';
  width: 14px;
  height: 14px;
}

#full {
  -webkit-text-stroke: 0.5px #86efac;
  background: linear-gradient(#86efac 0 100%) left / 0 no-repeat;
  color: transparent;
  background-clip: text;
}

#developer,
#fullstack {
  overflow: hidden;
  display: flex;
  font-size: 1em;
  font-weight: bold;
}
</style>
