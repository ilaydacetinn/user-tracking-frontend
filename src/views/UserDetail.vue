<template>
  <div class="p-6">
    <div v-if="store.loading" class="animate-pulse">
      <div class="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div class="h-4 bg-gray-200 rounded w-1/4 mb-1"></div>
      <div class="h-4 bg-gray-200 rounded w-1/5 mb-6"></div>
      <div class="h-96 bg-gray-200 rounded"></div>
    </div>
    <div v-else-if="store.error">{{ store.error }}</div>
    <div v-else-if="store.selectedUser" class="bg-white rounded-lg p-6 shadow-sm">
      <div class="flex items-center mb-6">
        <img
          :src="`https://i.pravatar.cc/150?img=${route.params.id + 5}`"
          alt="User Avatar"
          class="w-24 h-24 rounded-full mr-6 object-cover"
        />
        <div>
          <h1 class="text-3xl font-bold text-gray-800">{{ store.selectedUser.name }}</h1>
          <p class="text-gray-600">{{ store.selectedUser.email }}</p>
          <p class="text-gray-500 text-sm">{{ store.selectedUser.company?.name }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-gray-700">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.95 9.395a1 1 0 01-.192 1.034l-2.422 2.422a1 1 0 01-1.034.192L5.805 10.95a1 1 0 01-.684-.948V7a2 2 0 012-2zm10 12a2 2 0 01-2-2v-3.28a1 1 0 01.684-.948l4.395-1.996a1 1 0 011.034.192l2.422 2.422a1 1 0 01.192 1.034L18.05 15.195a1 1 0 01.948.684H21a2 2 0 012 2v3a2 2 0 01-2 2h-3zm-10 0a2 2 0 01-2-2v-3.28a1 1 0 01.684-.948l4.395-1.996a1 1 0 011.034.192l2.422 2.422a1 1 0 01.192 1.034L18.05 15.195a1 1 0 01.948.684H21a2 2 0 012 2v3a2 2 0 01-2 2h-3" />
          </svg>
          <span>{{ store.selectedUser.phone }}</span>
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.597 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.597-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <span>{{ store.selectedUser.website }}</span>
        </div>
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{{ store.selectedUser.address?.city }}</span>
        </div>
      </div>
      
      <UserDetailTabs
        :posts="store.posts"
        :albums="store.albums"
        :todos="store.todos"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "../stores/users";
import UserDetailTabs from "../components/UserDetailTabs.vue";

const route = useRoute();
const store = useUserStore();

onMounted(() => {
  store.fetchUserDetail(route.params.id);
});
</script>