<script setup lang="ts">
import Skills from '@/components/Skills.vue'
import MyWork from '@/components/MyWork.vue'
import { gsap } from 'gsap'
import { useTemplateRef, ref, onMounted } from 'vue'
import Projects from './Projects.vue'

const sectionWork = useTemplateRef<HTMLElement | null>('sectionWork')
const sectionProjects = useTemplateRef<HTMLElement | null>('sectionProjects')
const sectionSkills = useTemplateRef<HTMLElement | null>('sectionSkills')
const activeClass = ref<boolean | null>(false)

onMounted(() => {
  activeClass.value = true
})

function scrollTo(view: any) {
  view.scrollIntoView({ behavior: 'smooth' })
}

function onEnter(el: any) {
  let tl = gsap.timeline()

  tl.to('#full', { backgroundSize: '100%', duration: 4, ease: 'circ.inOut' }, 0)
}
</script>

<template>
  <section
    class="w-full relative flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center py-8 sm:px-[9em] md:py-0 px-4 "
    ref="main">
    <div class="h-[62vh] lg:h-[90vh] w-full text-white gap-8 rounded-2xl p-4 flex flex-col lg:justify-center">
      <span
        class="relative top-4 font-bold w-min text-white text-sm tracking-widest before:content-[' '] before:w-full before:h-1 before:absolute before:top-4 before:bg-[#8CC63F]">DEVELOPER</span>
      <transition tag="div" v-show="activeClass" @enter="onEnter"
        class="text-5xl md:text-8xl flex text-green-300 font-extrabold text-start">
        <h1 id="full" class="tracking-tighter">
          Jesus <br />
          Moran
        </h1>
      </transition>
      <p class="lg:text-lg text-start max-w-sm">
        +3 years of experience. Software Engineer from Maracaibo, Venezuela 🇻🇪.
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

    <img src="/person.svg" class="w-[200px] h-[200px] lg:w-auto lg:h-auto lg:max-w-lg " />
  </section>

  <div ref="sectionProjects">
    <Projects />
  </div>

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
