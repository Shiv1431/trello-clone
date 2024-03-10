<!-- views/AddTask.vue -->
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
      status: this.$route.params.status || 'notStarted' // Default status from route parameter
    };
  },
  methods: {
    saveTask() {
      const task = { title: this.title, description: this.description, status: this.status };

      // Save the task to a file using file handling (localStorage or any other method)
      let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
      tasks[this.status] = tasks[this.status] || [];
      tasks[this.status].push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));

      this.$router.push({ name: 'ProjectBoard' });
    },
    cancel() {
      this.$router.push({ name: 'ProjectBoard' });
    }
  }
}
</script>


<style scoped>
/* Your CSS styles here */
</style>

