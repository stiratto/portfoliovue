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

  const md = markdownit({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre><code class="hljs">' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
            '</code></pre>';
        } catch (e) {
          console.log(e)
        }
      }

      return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });

  // replaces every apostrophe with a white space

  // replaces                             
  //                                        !\w,\w | !\w \w   | !\w \w (\b)
  //                                        - Aws - Iam       Policies
  // aws-iam-policies -> aws iam policies -> aws    iam       policies
  let filename = route.params.name.replace(/[-]+/g, " ").replace(/\b[a-z]/g, (letter) => {
    // we dont want Aws Iam Policies, because in the file, the title
    // is AWS IAM Policies. how cna we do that?
    return letter.toUpperCase();
  });

  const files = import.meta.glob('@/blog-files/*.md', { query: '?raw', import: 'default' });

  for (const path in files) {
    const content = await files[path]()

    const { data } = matter(content)

    if (data.title[0] !== filename[0]) {
      continue 
    }
   filename = filename.split('').map((l, i) => {

      const isUppercase = str => str === data.title[i].toUpperCase()
      if (isUppercase(data.title[i]) && !isUppercase(l)) {
        return l.toUpperCase()
      }
      return l
    }).join("")

    if (data.title === filename) {
      const { content: markdownContent } = matter(content)
      post.value = {
        title: data.title,
        description: data.description,
        thumbnail: data.thumbnail,
        content: md.render(markdownContent)
      }
      return
    }
  }
})
</script>


<template>
    <h1 class="border-[#e78a53] border-l pl-4 text-white
      text-lg">{{ post.title }}</h1>
    <div v-html="post.content" class="blog-content max-w-4xl text-clip"></div>
</template>


<style>
.blog-content p {
  margin-block: 1lh;
}
</style>
