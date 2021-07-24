<template>
  <div class="mx-10 sm:mx-10 md:mx-10 lg:mx-48">
    <!-- ヘッダー -->
    <div class="border-b-2">
      <p class="my-5 text-center sm:text-left text-2xl">hoge</p>
    </div>
    <!-- メイン -->
    <!-- 2カラムでいく -->
    <div >
    <div class="flex justify- mt-5 flex flex-wrap">
      <div class="flex flex-wrap justify-center">
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
    </div>
    <!-- 記事 -->
    <div class="flex justify-between justify-center mt-5 flex flex-wrap">
      <div>
        <div
          v-for="post in posts"
          :key="post.path"
          class="flex justify-start border-b-2 mr-48 justify-center"
        >
          <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
        </div>
      </div>
      <div
        class="
          md:flex
          flex-wrap
          content-end
          w-full
          sm:w-48

          border-solid border-2 border-gray-600
          p-3
        "
      >
        ほほほほほほほほほほほほほほほほほほほじょじょじょじょじょじょじょじょじょじょじょjほほほほほほほh
      </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("/", { deep: true }).fetch();
    console.log(posts);

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
