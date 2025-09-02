<template>
  <div>
    <div class="flex space-x-4 border-b mb-4">
      <button 
        v-for="tab in tabs" 
        :key="tab" 
        @click="activeTab = tab"
        :class="['pb-2', activeTab === tab ? 'border-b-2 border-blue-500 font-bold' : 'text-gray-500']"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Posts -->
    <div v-if="activeTab === 'Posts'" class="space-y-4">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>

    <!-- Albums -->
    <div v-if="activeTab === 'Albums'" class="space-y-4">
      <AlbumItem v-for="album in albums" :key="album.id" :album="album" />
    </div>

    <!-- Todos -->
    <div v-if="activeTab === 'Todos'" class="space-y-2">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PostItem from "./PostItem.vue";
import AlbumItem from "./AlbumItem.vue";
import TodoItem from "./TodoItem.vue";

defineProps({
  userId: String,
  posts: Array,
  albums: Array,
  todos: Array
});

const tabs = ["Posts", "Albums", "Todos"];
const activeTab = ref("Posts");
</script>
