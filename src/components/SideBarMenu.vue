<script lang="ts">
import { defineComponent, ref } from "vue";
import Tabs from "@/types/tabs";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "SideBarMenu",
  setup() {
    const router = useRouter();
    const selectedTab = ref<number>(0);
    const tabs = ref<Tabs[]>([
      { id: 0, title: "Renderização condicional", route: 'renderizacao-condicional' },
      { id: 1, title: "Renderização de lista", route: 'renderizacao-lista' },
    ]);

    if(selectedTab.value === 0 && router.currentRoute.value.path === '/') router.push('/renderizacao-condicional');

    return { selectedTab, tabs };
  },
});
</script>

<template>
  <div
    class="flex flex-col text-center h-auto w-60 justify-center rounded-md bg-slate-200"
  >
    <router-link
      v-for="tab in tabs"
      :key="tab.id"
      :to="tab.route"
      class="sidebar hover:bg-primary font-mono italic w-100 py-2 cursor-pointer border-l-4 border-l-primary"
      :class="{ 'bg-primary' : tab.id === selectedTab  }"
      @click="selectedTab = tab.id"
    >
      {{ tab.title }}
    </router-link>
  </div>
</template>
