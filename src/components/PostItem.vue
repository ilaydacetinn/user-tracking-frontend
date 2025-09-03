<template>
  <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 shadow-sm">
    <h3 class="font-bold text-gray-800">{{ post.title }}</h3>
    <p class="text-gray-600 mt-1 text-sm">{{ post.body }}</p>
  </div>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>