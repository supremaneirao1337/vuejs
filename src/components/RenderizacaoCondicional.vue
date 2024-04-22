<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import Post from "@/types/post";

export default defineComponent({
  name: "renderizacaoCondicional",
  async setup() {
    const postList = ref<Post[]>([]);
    const getRequestPosts = async () => {
      try {
        const req = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        postList.value = req.data;
      } catch (e) {
        console.log("ERRO");
      }
    };

    getRequestPosts();

    return { postList };
  },
});
</script>

<template>
  <div>
    <div class="grid grid-cols-1">
        <span class="text-gray-400">// Renderizando de acordo com o id do usuário</span>
        <select class="border-primary" id="">
            <option value="">Usuário</option>
        </select>
    </div>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
      <div
        class="bg-slate-200 rounded-md p-3 flex flex-col"
        v-for="post in postList"
        :key="post.id"
      >
        <div class="flex border-b-2 border-primary pb-2">
          <div class="w-20">
            <span
              class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
              >Título</span
            >
          </div>

          <div class="w-80 text-sm text-center">
            {{ post.title }}
          </div>
        </div>
        <div class="flex border-b-2 border-primary pb-2 mt-4">
          <div class="w-20">
            <span
              class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
              >Body</span
            >
          </div>

          <div class="w-80 text-sm text-center">
            {{ post.body }}
          </div>
        </div>
        <div class="flex mt-4 pb-2">
          <div class="w-20">
            <span
              class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
              >User Id</span
            >
          </div>

          <div class="w-80 text-sm text-center">
            {{ post.userId }}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>