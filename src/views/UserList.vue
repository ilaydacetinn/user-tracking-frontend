<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Kullanıcılar</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <UserCard 
        v-for="user in users" 
        :key="user.id" 
        :user="user" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getUsers } from "../services/api";
import UserCard from "../components/UserCard.vue";

const users = ref([]);

onMounted(async () => {
  users.value = await getUsers();
});
</script>
