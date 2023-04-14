import TaskArrayItem from '../interfaces';

export const findTask = (arr: Array<TaskArrayItem>, id: number) => {
  return arr.find((task: TaskArrayItem) => task.id === id);
};
