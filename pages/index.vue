<template>
  <div class="max-w-screen-2xl container mx-auto">
    <div class="mx-10 sm:mx-10 md:mx-10 lg:mx-48">
      <!-- ヘッダー -->
      <div class="border-b-2 py-5 text-center sm:text-left">
        <nuxt-link to="/" class="text-center sm:text-center text-2xl"
          >Blog</nuxt-link
        >
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
                mx-3
                bg-gray-200
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
                mx-3
                bg-gray-200
              "
              >tech</nuxt-link
            >
          </div>
          <!-- 記事 -->
          <div class="">
            <nuxt-link
              v-for="post in posts"
              :key="post.path"
              :to="post.path"
              class="flex justify-start border-b-2 py-5  text-2xl block hover:bg-gray-100"
              >{{ post.title }}</nuxt-link
            >

          </div>
        </div>
        <!-- 自己紹介 -->
        <div class="w-full lg:w-1/3">
          <div class="p-3 rounded-md border-solid border-2 border-gray-600">
            <!-- 中身を作っていく -->
            <!-- 画像 -->
            <div class="flex flex-row">
              <img
                src="/image.png"
                class="rounded-full h-16 w-16"
                alt="my-face"
              />

              <!-- 名前 -->
              <div class="flex flex-wrap content-center ml-5">
                <p class="text-xl font-bold">キンジョウ</p>
              </div>
            </div>
            <!--紹介内容  -->
            <div>
              <p class="mt-3">
                学生エンジニアをしています。気ままにwebサービスなどを作っています。詳しくは
                <a
                  href=""
                  @click="LinkClick('https://kinjyo.me')"
                  class="text-indigo-600"
                  >ポートフォリオへ</a
                >
              </p>

              <!-- アイコン表示 -->
              <div></div>
            </div>
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
  methods: {
    LinkClick(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
