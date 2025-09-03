<template>
  <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
    <h3 class="font-bold text-gray-800">{{ album.title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  album: Object,
});
</script>