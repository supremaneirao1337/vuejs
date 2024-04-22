<script lang="ts">
import { defineComponent } from "vue";
import SideBarMenu from "@/components/SideBarMenu.vue";
import "./assets/tailwind.css";

export default defineComponent({
  name: "App",
  setup() {
    return true;
  },
  components: {
    SideBarMenu,
  },
});
</script>

<template>
  <div>
    <div class="container flex justify-center mt-5">
      <SideBarMenu />
    </div>

    <div class="container mt-5">
      <Suspense>
        <template #default>
          <router-view></router-view>
        </template>
        <template #fallback>
          <p>Carregando Requisição...</p>
        </template>
      </Suspense>
    </div>
  </div>
</template>

