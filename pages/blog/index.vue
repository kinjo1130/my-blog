<template>

<div class="lg:mx-48">
      <div class="border-b-2">
        <p class="my-5 pl-5 text-center sm:text-left text-2xl">hoge</p>
      </div>

  <div>
    <li v-for="post of posts" :key="post.path">
      <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
    </li>
    <nuxt></nuxt>
  </div>
</div>

</template>


<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  layouts:'header',
};
</script>
