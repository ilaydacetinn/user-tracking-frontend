<template>
  <div class="flex items-center space-x-2">
    <input type="checkbox" :checked="todo.completed" disabled />
    <span :class="todo.completed ? 'line-through text-gray-500' : ''">
      {{ todo.title }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  todo: Object
});
</script>
