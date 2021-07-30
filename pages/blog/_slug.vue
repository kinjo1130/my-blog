<template>
  <div class="lg:mx-48">
   <div class="border-b-2 py-5">
        <nuxt-link to="/" class="text-center sm:text-left text-2xl"
          >Blog</nuxt-link
        >
      </div>
    <div>
      <h2>{{ post.title }}</h2>
      <nuxt-content :document="post" />
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content(`blog/${params.slug}`).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post,
    };
  },
};
</script>
