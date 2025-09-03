<template>
  <router-link :to="`/users/${user.id}`" class="block">
    <div
      class="bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow duration-200"
    >
      <div class="flex items-center mb-4">
        <img
          :src="`https://i.pravatar.cc/150?img=${user.id + 5}`"
          alt="User Avatar"
          class="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 class="font-bold text-gray-800">{{ user.name }}</h3>
          <p class="text-sm text-gray-600">{{ user.email }}</p>
          <p class="text-sm text-gray-500">+90 555 678 12 23</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  user: Object,
});
</script>