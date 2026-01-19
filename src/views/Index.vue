<script setup lang="ts">
import Skills from "@/components/Skills.vue";
import MyWork from "@/components/MyWork.vue";
import { gsap } from "gsap";
import { useTemplateRef, ref, onMounted } from "vue";
import Projects from "./Projects.vue";

const sectionSkills = useTemplateRef<HTMLElement | null>("sectionSkills");
const activeClass = ref<boolean | null>(false);

onMounted(() => {
  activeClass.value = true;
});

function scrollTo(view: any) {
  view.scrollIntoView({ behavior: "smooth" });
}

function onEnter(el: any) {
  let tl = gsap.timeline();

  tl.to(
    "#full",
    { backgroundSize: "100%", duration: 4, ease: "circ.inOut" },
    0
  );
}
</script>

<template>
  <main class="flex flex-col gap-24">
    <section
      class="w-full relative flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center px-4"
      ref="main"
    >
      <div
        class="py-24 w-full text-white gap-8 rounded-2xl p-4 flex flex-col lg:justify-center"
      >
        <div
          class="text-5xl md:text-8xl flex flex-col md:flex-row font-extrabold text-start
          items-start md:items-center gap-4 justify-between"
        >
          <h1 id="full" class="tracking-tighter !text-[#e78a53] text-[clamp(48px,5vw,128px)]">
            Jesus <br />
            Moran
          </h1>
          <p class="text-lg text-start max-w-sm text-white">
          +3 years of experience. Software Engineer from Maracaibo, Venezuela
          🇻🇪.
        </p>
        </div>
        
      

        <div class="flex gap-8 btn-div">
          <button
            class="btn-item uppercase text-sm tracking-widest"
            @click="scrollTo(sectionSkills)"
          >
            Skills
          </button>
          <router-link to="/projects">
            <button class="btn-item uppercase text-sm tracking-widest">
              Projects
            </button>
          </router-link>
        </div>
      </div>
    </section>
    <div class="text-[clamp(1rem,2vw,4rem)] max-w-6xl">
        <p>I'm Jesus Moran, a developer from Venezuela with over 3
        years of (not professional) experience. @stiratto is my
        nickname.</p>
        <p>I've worked on many projects throughout my career,
        including Full-Stack projects, reverse engineering and
        re-building over 10.000 thousand lines of ofuscated and
        minified code in a single project, I've done ECommerces, I've built multi-platform
        apps using Tauri and a Router built in Node.js.</p>
      </div>

    <div>
      <Projects />
    </div>

  </main>
</template>

<style scoped>
.btn-item {
  padding: 10px;
  border-left: 2px solid #96a6c8;
  position: relative;
}

.btn-item:hover::before {
  position: absolute;
  top: 25%;
  left: 100%;
  background-color: #95a99f6b;
  content: "";
  width: 14px;
  height: 14px;
}

#full {
  /* -webkit-text-stroke: 0.5px #73D936; */
  background: linear-gradient(#73d936 0 100%) left / 0 no-repeat;
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
