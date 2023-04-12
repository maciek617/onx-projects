import { createStore } from 'vuex';

export default createStore({
  state: {
    todoList: [],
  },
  getters: {},
  mutations: {
    addTask(state, payload) {
      state.todoList.push(payload);
    },

    removeTask(state, payload) {
      state.todoList.filter((_, index) => index !== payload);
    },

    editTask(state, payload) {
      const currentTask = state.todoList.find((task) => task.id === payload);
      currentTask.isCompleted = !currentTask.isCompleted;
    },
  },
});
