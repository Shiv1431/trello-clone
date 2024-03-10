<!-- components\TaskCard.vue -->
<template>
  <div class="task-card">
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
    <button @click="editTask">Edit</button>
    <!-- Placeholder scoped slot -->
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    editTask() {
      this.$emit('editTask', this.task);
    }
  }
}
</script>

<style scoped>
.task-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
