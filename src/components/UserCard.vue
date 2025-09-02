<template>
  <div 
    class="p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer transition"
    @click="$router.push(`/users/${user.id}`)"
  >
    <h2 class="text-xl font-bold mb-2">{{ user.name }}</h2>
    <p class="text-gray-600">{{ user.email }}</p>
    <p class="text-gray-500 text-sm">{{ user.company?.name }}</p>
  </div>
</template>

<script setup>
defineProps({
  user: Object
});
</script>
