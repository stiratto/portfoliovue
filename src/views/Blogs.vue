<script setup>
import { ref, onMounted } from 'vue';
import matter from 'gray-matter';
import BlogCard from '@/components/BlogCard.vue'
import { Buffer } from 'buffer'; 
const posts = ref([]);

onMounted(async () => {
  window.Buffer = Buffer
  const files = import.meta.glob('@/blog-files/*.md', { as: 'raw' });

  const loadedPosts = []
  for (const path in files) {
    const content = await files[path]()
    const { data, content: markdownContent } = matter(content); 

    loadedPosts.push({
      title: data.title || path.split('/').pop().replace('.md', ''),
      thumbnail: data.thumbnail,
      description: data.description
    })
  }

  posts.value = loadedPosts
})
</script>


<template>
  <div class="mt-28 md:mt-44 p-8 sm:px-[9em] flex flex-col items-center
    justify-start text-left gap-8">
    <h1 class="text-4xl sm:text-7xl font-black text-[#e78a53]">
      <span class="text-[#95A99F]">/</span>blogs
    </h1>
    <blog-card v-for="post in posts" v-bind="post"></blog-card>
  </div>
</template>
