<template>
  <header>
    <div class="lg:mx-48">
      <div class="border-b-2">
        <p class="my-5 pl-5 text-center sm:text-left text-2xl">hoge</p>
      </div>
      <div class="flex justify-between justify-center mt-5">
        <div class="flex flex-wrap">
          <nuxt-link
            to="blog"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              justify-center
              bg-gray-200
              mx-3
            "
            >blog</nuxt-link
          >
          <nuxt-link
            to="tech"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              justify-center
              bg-gray-200
              mx-3
            "
            >tech</nuxt-link
          >
        </div>
        <!-- 自己紹介 -->
        <div
          class="
            md:flex
            flex-wrap
            content-end
            w-48
            border-solid border-2 border-gray-600
            p-3
          "
        >
          ほほほほほほほほほほほほほほほほほほほほほほじじじじじじじじじほほほほほほほh
        </div>
      </div>
      <!-- 記事 -->

      <div v-for="post in posts" :key="post.slug" class="flex justify-start border-b-2 mr-48">
        <p class="">{{ post.title }}</p>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  async asyncData({ $content,  error }) {
    let posts;
    try {
      posts = await $content('/',{ deep: true }).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Post not found" });
    }

    return {
      posts,
    };
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
};
</script>
