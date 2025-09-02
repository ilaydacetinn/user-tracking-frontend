<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white p-4">
      <Sidebar />
    </aside>

    <!-- Content -->
    <main class="flex-1 bg-gray-100 overflow-y-auto p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
</script>
