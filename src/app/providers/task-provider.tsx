import { createContext, useState, ReactNode, useContext } from "react";
import { ITask } from "../../entities/task/task.model";
import { TASKS_MOCKS } from "../../shared/mocks/tasks-mocks";

interface TasksContextType {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
  getTaskById: (id: string | undefined) => ITask | undefined;
  getTaskByParentId: (id: string | undefined) => ITask[] | undefined;
  deleteTask: (id: string | undefined) => void;
  setMocks: () => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const setMocks = () => setTasks(TASKS_MOCKS);

  const addTask = (task: ITask) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const getTaskById = (id: string | undefined) => {
    if (!id) return;
    return tasks.find((task) => task.id === id);
  };

  const getTaskByParentId = (id: string | undefined) => {
    if (!id) return;
    return tasks.filter((task) => task.parentId === id);
  };

  const updateTask = (updatedTask: ITask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id: string | undefined) => {
    if (!id) return;
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        setMocks,
        getTaskById,
        getTaskByParentId,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

const useTaskContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTaskContext must be used within a TasksProvider");
  }

  return context;
};

export { TasksProvider, useTaskContext };
