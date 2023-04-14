<template>
  <FilterTasks />
  <div class="tasks-wrapper">
    <TransitionGroup name="list">
      <div v-for="task in store.state.todoList" :key="task.id">
        <div
          class="task"
          v-if="
            task.status === store.state.globalFilterStatus ||
            store.state.globalFilterStatus === 'all'
          "
        >
          <p
            :class="replaceChars(task.status, ' ', '-')"
            class="task-name"
            @click="
              {
                clickedTask = task.id;
                openModal = true;
              }
            "
          >
            {{ task.name }}
            <span
              :class="'status-' + replaceChars(task.status, ' ', '-')"
              class="status-task"
              >{{ task.status }}</span
            >
          </p>
          <TaskTools
            @editTaskStatusToComplete="editTaskStatusToComplete(task)"
            @removeCurrentTask="removeCurrentTask(task)"
          />
        </div>
      </div>
    </TransitionGroup>
    <NoTaskFound :taskLength="store.state.todoList.length" />
    <TaskModal
      v-if="openModal"
      @closeModal="closeModal"
      @updateTaskStatus="
        updateTaskStatus(
          findTask(store.state.todoList, clickedTask),
          'in progress'
        )
      "
      :item="findTask(store.state.todoList, clickedTask)"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import FilterTasks from './FilterTasks.vue';
import TaskModal from './TaskModal.vue';
import TaskTools from './TaskTools.vue';
import { ref, onMounted } from 'vue';
import TaskArrayItem from '../interfaces';
import NoTaskFound from './NoTaskFound.vue';
import { replaceChars } from '../helpers/replaceChars';
import { findTask } from '../helpers/findTask';

const clickedTask = ref<number>(0);
const openModal = ref<boolean>(false);
const store = useStore();
const savedTodolist = ref(localStorage.getItem('todos'));
const closeModal = () => {
  openModal.value = false;
};

const updateTaskStatus = (task: TaskArrayItem | undefined, status: string) => {
  store.commit('editTaskStatus', { id: task?.id, status: status });
  localStorage.setItem('todos', JSON.stringify(store.state.todoList));
};

const editTaskStatusToComplete = (task: TaskArrayItem) => {
  store.commit('editTaskStatus', {
    id: task.id,
    status: 'completed',
  });
  localStorage.setItem('todos', JSON.stringify(store.state.todoList));
};

const removeCurrentTask = (task: TaskArrayItem) => {
  store.commit('removeTask', task.id);
  localStorage.setItem('todos', JSON.stringify(store.state.todoList));
};

onMounted(() => {
  if (savedTodolist.value) {
    store.commit('updateTodoList', JSON.parse(savedTodolist.value));
  }
});
</script>

<style scoped>
.tasks-wrapper {
  background-color: #1e1e1e;
  border-radius: 4px;
  padding-top: 10px;
  max-width: 600px;
  margin: 0 10px;
  min-height: 300px;
}

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: #0f0f0f;
  padding: 10px;
  border-radius: 4px;
  margin-left: 14px;
  margin-right: 14px;
  margin-top: 10px;
}

.task-name {
  position: relative;
  padding-top: 2px;
}

.task-name span {
  position: absolute;
  top: -60%;
  left: 0;
  font-size: 10px;
  width: 100px;
}

.completed {
  text-decoration: line-through;
  font-size: 14px;
  color: gray;
}

.status-in-progress {
  color: #26e3c2;
}

.in-progress {
  color: #26e3c2;
}

.completed {
  text-decoration: line-through;
  font-size: 14px;
  color: gray;
}
.status-completed {
  color: #45a0f5;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
