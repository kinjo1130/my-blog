<template>
  <div class="max-w-screen-2xl container mx-auto">
    <div class="mx-10 sm:mx-10 md:mx-10 lg:mx-48">
      <!-- ヘッダー -->
      <div class="border-b-2 py-5">
        <nuxt-link to="/" class="text-center sm:text-left text-2xl"
          >Blog</nuxt-link
        >
      </div>
       <!-- 記事 -->
      <div class="flex flex-wrap justify-end">
        <div class="w-full">
          <p class="mt-10 text-4xl font-bold">{{ post.title }}</p>
          <p class="mt-2 mb-9">{{ post.description }}</p>
          <p>{{ $dayjs(post.date).format('YYYY/MM/DD') }}</p>
          <nuxt-content class="prose leading-loose mb-16" :document="post" />

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content(`tech/${params.slug}`).fetch();
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
