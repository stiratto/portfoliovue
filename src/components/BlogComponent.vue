<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import hljs from 'highlight.js';
import markdownit from "markdown-it"
import matter from 'gray-matter';
import { Buffer } from 'buffer';

let post = ref({})
onMounted(async () => {
  window.Buffer = Buffer
  const route = useRoute()
  const markdownRef = ref()

  const md = markdownit({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) { }
      }
      return ''; // use external default escaping
    }
  })

  const filename = route.params.name.replace(/[-]+/g, " ").replace(/\b[a-z]/g, (letter) => {
    return letter.toUpperCase();
  });

  const files = import.meta.glob('@/blog-files/*.md', { query: '?raw', import: 'default' });

  for (const path in files) {
    const content = await files[path]()

    const { data } = matter(content)
    if (data.title === filename) {
      const { content: markdownContent } = matter(content)
      post.value = {
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        content: md.render(markdownContent)
      }
    }
  }
})
</script>


<template>
  <main class="py-16 max-w-3xl mx-auto w-full">
    <div class="border-l border-[#111111] w-fit pl-8">

      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </div>
    <div v-html="post.content" class="blog-content max-w-3xl"></div>
  </main>
</template>
