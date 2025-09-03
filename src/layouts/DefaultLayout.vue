<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-64 bg-white shadow-md flex flex-col justify-between">
      <div>
        <div class="p-4 border-b border-gray-200">
          <h2 class="text-2xl font-semibold text-gray-800">
            <span class="text-blue-600">N2</span>Mobil
          </h2>
        </div>

        <nav class="mt-5">
          <router-link
            to="/users"
            class="flex items-center p-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600"
            active-class="bg-blue-50 text-blue-600 border-blue-600"
          >
            Kullanıcılar
          </router-link>
        </nav>
      </div>

      <div class="p-4 border-t border-gray-200">
        <img :src="logo" alt="N2Mobil Logo" class="h-10 w-auto" />
      </div>
    </aside>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-between items-center p-4 bg-white shadow-sm">
        <h1 class="text-xl font-semibold text-gray-800">All users</h1>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import logo from '../assets/logo.png';
</script>