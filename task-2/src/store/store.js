import { createStore } from 'vuex';

export default createStore({
  state: {
    todoList: [],
    globalFilterStatus: 'all',
  },
  getters: {},
  mutations: {
    addTask(state, payload) {
      state.todoList.push(payload);
    },

    updateTodoList(state, payload) {
      state.todoList = payload;
    },
    
    removeTask(state, payload) {
      state.todoList = state.todoList.filter((task) => task.id !== payload);
    },

    editTaskStatus(state, payload) {
      const currentTask = state.todoList.find((task) => task.id === payload.id);
      currentTask.status = payload.status;
    },

    changeGlobalFilterStatus(state, payload) {
      state.globalFilterStatus = payload;
    },
  },
});
