<template>
  <h1 style="color: white">callback code: {{ code }}</h1>
</template>

<script setup>
import { ref, onMounted } from "vue";
const code = ref("");

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  code.value = urlParams.get("code");
});
</script>
