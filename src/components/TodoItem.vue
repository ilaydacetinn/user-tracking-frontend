<template>
  <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
    <input
      type="checkbox"
      :checked="todo.completed"
      disabled
      class="form-checkbox h-5 w-5 text-blue-600"
    />
    <span :class="todo.completed ? 'line-through text-gray-500' : 'text-gray-700'">
      {{ todo.title }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  todo: Object,
});
</script>