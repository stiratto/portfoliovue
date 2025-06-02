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
  <main class="flex flex-col gap-24 mt-48">

    <section class="w-full relative flex flex-col-reverse lg:flex-row
    lg:justify-between lg:items-center    px-4
    border border-[#ffdd33]" ref="main">
      <div class="py-24 w-full text-white gap-8 rounded-2xl p-4 flex flex-col lg:justify-center">
        <!--<span class="relative top-4 font-bold w-min text-white text-sm
        tracking-widest before:content-[' '] before:w-full before:h-1
        before:absolute before:top-4
        before:bg-[#ffdd33]">DEVELOPER</span> -->
        <transition tag="div" v-show="activeClass" @enter="onEnter"
          class="text-5xl md:text-8xl flex text-[#ffdd33] font-extrabold text-start">
          <h1 id="full" class="tracking-tighter !text-[#ffdd33] ">
            Jesus <br />
            Moran
          </h1>
        </transition>
        <p class="lg:text-lg text-start max-w-sm text-white">
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

    </section>

    <div ref="sectionProjects">
      <Projects />
    </div>

    <div ref="sectionSkills">
      <Skills></Skills>
    </div>

    <!-- <div ref="sectionWork">
      <MyWork />
    </div> -->


  </main>
</template>

<style scoped>
.btn-item {
  padding: 10px;
  border-left: 2px solid #96A6C8;
  position: relative;
}

.btn-item:hover::before {
  position: absolute;
  top: 25%;
  left: 100%;
  background-color: #95a99f6b;
  content: '';
  width: 14px;
  height: 14px;
}

#full {
  /* -webkit-text-stroke: 0.5px #73D936; */
  background: linear-gradient(#73D936 0 100%) left / 0 no-repeat;
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
