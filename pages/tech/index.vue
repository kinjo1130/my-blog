<template>

  <div>
    <li v-for="post of posts" :key="post.path">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </li>

  </div>
</template>


<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("tech").fetch();

    return {
      posts,
    };
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>
