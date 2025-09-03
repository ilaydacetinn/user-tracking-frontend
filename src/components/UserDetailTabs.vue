<template>
  <div>
    <div class="flex space-x-4 border-b border-gray-200 mb-6">
      <button 
        v-for="tab in tabs" 
        :key="tab" 
        @click="activeTab = tab"
        :class="['pb-2 px-4 transition-colors duration-200', activeTab === tab ? 'border-b-2 border-blue-500 text-blue-600 font-bold' : 'text-gray-500 hover:text-gray-700']"
      >
        {{ tab }}
      </button>
    </div>

    <div v-if="activeTab === 'Paylaşımlar'" class="space-y-4">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>

    <div v-if="activeTab === 'Albümler'" class="space-y-4">
      <AlbumItem v-for="album in albums" :key="album.id" :album="album" />
    </div>

    <div v-if="activeTab === 'Görevler'" class="space-y-2">
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
  posts: Array,
  albums: Array,
  todos: Array
});

const tabs = ["Paylaşımlar", "Albümler", "Görevler"];
const activeTab = ref("Paylaşımlar");
</script>