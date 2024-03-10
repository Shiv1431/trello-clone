<template>
  <div id="app">
    <div class="container">
      <div class="status-column" v-for="(status, index) in statuses" :key="index">
        <div class="status-border">
          <h2>{{ status.title }} ({{ status.tasks.length }})</h2>
          <draggable v-model="status.tasks" :item-key="index.toString()" @end="handleDragEnd">
            <template #item="{ item }">
              <task-card :task="item" @editTask="editTask"></task-card>
            </template>
          </draggable>
          <button @click="navigateToAddTaskPage(status.key)">+ Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from '../components/TaskCard.vue';

export default {
  components: {
    draggable,
    TaskCard
  },
  data() {
    return {
      statuses: [
        { key: 'notStarted', title: 'Not Started', tasks: [] },
        { key: 'inProgress', title: 'In Progress', tasks: [] },
        { key: 'complete', title: 'Complete', tasks: [] }
      ]
    };
  },
  methods: {
    handleDragEnd(event) {
      // Update task status after drag and drop
    },
    navigateToAddTaskPage(statusKey) {
      this.$router.push({ name: 'AddTask', params: { status: statusKey } });
    }
  }
}
</script>

<style>
.container {
  display: flex;
  border: 2px solid #ccc; /* Border around the container */
  border-radius: 5px;
  padding: 10px;
}

.status-column {
  flex: 1;
  margin-right: 20px;
}

.status-border {
  border: 1px solid #ccc; /* Border around each section */
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px; /* Add some space between sections */
}
</style>
