<template>
  <div class="max-w-screen-2xl container mx-auto">
    <div class="mx-10 sm:mx-10 md:mx-10 lg:mx-48">
      <!-- ヘッダー -->
      <div class="border-b-2">
        <p class="my-5 text-center sm:text-left text-2xl">hoge</p>
      </div>
      <!-- メイン -->
      <!-- 2カラムでいく -->
      <div class="flex flex-wrap justify-end">
        <div class="w-full lg:w-2/3">
          <div class="flex justify-start my-5">
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
          <!-- 記事 -->
          <div class="">
            <div
              v-for="post in posts"
              :key="post.path"
              class="flex justify-start border-b-2"
            >
              <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
            </div>
          </div>
        </div>
        <!-- 自己紹介 -->
        <div class="w-full lg:w-1/3">
          <div class="p-3 rounded-md border-solid border-2 border-gray-600">
            <!-- 中身を作っていく -->
            <!-- 画像 -->
            <div></div>
            <!-- 名前 -->
            <div></div>
            <!--紹介内容  -->
            <div>ほほほおおじいいいいいいおお</div>
          </div>
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
