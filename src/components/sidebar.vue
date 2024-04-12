<style>
    .clicavel{
        cursor: pointer;
    }
</style>
<template>
    <ul class="list-group"> 
        <router-link to="/inicio" @click="updateSideBarIndex(0)" :class="{ active: abaAtiva(0) }" class="clicavel list-group-item">Início</router-link>
        <router-link to="/crud" @click="updateSideBarIndex(1)" :class="{ active: abaAtiva(1) }" class="clicavel list-group-item">CRUD</router-link>
        <router-link to="/axios" @click="updateSideBarIndex(2)" :class="{ active: abaAtiva(2) }" class="clicavel list-group-item">Consumir dados com Axios</router-link>
    </ul>
</template>

<script setup>
import { ref, reactive } from 'vue';

console.log(window.location.origin)
let sideBarIndex = ref(0);

function abaAtiva(index){
    return sideBarIndex.value === index;
}

function updateSideBarIndex(index){
    sideBarIndex.value = index;
}

</script>