<template>
  <div class="p-4 border rounded-lg">
    <h3 class="font-bold">{{ album.title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  album: Object
});
</script>
