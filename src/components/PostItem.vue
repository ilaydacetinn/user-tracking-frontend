<template>
  <div class="p-4 border rounded-lg">
    <h3 class="font-bold">{{ post.title }}</h3>
    <p class="text-gray-600">{{ post.body }}</p>
  </div>
</template>

<script setup>
defineProps({
  post: Object
});
</script>
