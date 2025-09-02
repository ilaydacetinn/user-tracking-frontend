<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-2">{{ user?.name }}</h1>
    <p class="text-gray-600">{{ user?.email }}</p>
    <p class="text-gray-500 text-sm mb-6">{{ user?.company?.name }}</p>

    <!-- Tabs -->
    <UserDetailTabs 
      :userId="userId"
      :posts="posts"
      :albums="albums"
      :todos="todos"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getUser, getUserPosts, getUserAlbums, getUserTodos } from "../services/api";
import UserDetailTabs from "../components/UserDetailTabs.vue";

const route = useRoute();
const userId = route.params.id;

const user = ref(null);
const posts = ref([]);
const albums = ref([]);
const todos = ref([]);

onMounted(async () => {
  user.value = await getUser(userId);
  posts.value = await getUserPosts(userId);
  albums.value = await getUserAlbums(userId);
  todos.value = await getUserTodos(userId);
});
</script>
