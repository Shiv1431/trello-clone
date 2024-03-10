<!-- views/AddTaskContainer.vue -->
<template>
    <div>
      <h1>Add New Task</h1>
      <form @submit.prevent="saveTask">
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Description:</label>
        <textarea v-model="description" required></textarea>
        <label>Status:</label>
        <select v-model="status">
          <option value="notStarted">Not Started</option>
          <option value="inProgress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
        <button type="submit">Save</button>
        <button @click="cancel">Cancel</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        status: 'notStarted' // Default status
      };
    },
    methods: {
      saveTask() {
        const task = { title: this.title, description: this.description, status: this.status };
        this.$router.push({ name: 'project-board' });
      },
      cancel() {
        this.$router.push({ name: 'project-board' });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Your CSS styles here */
  </style>
  