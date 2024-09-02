import { createContext, useState, ReactNode, useContext } from 'react';
import { ITask } from '../../entities/task/task.model';
import { TASKS_MOCKS } from '../../shared/mocks/tasks-mocks';

interface TasksContextType {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
  deleteTask: (id: string) => void;
  setMocks: () => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const setMocks = () => setTasks(TASKS_MOCKS);

  const addTask = (task: ITask) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (updatedTask: ITask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, updateTask, deleteTask, setMocks }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTaskContext = () => {
  const context = useContext(TasksContext);
  
  if (!context) {
    throw new Error('useTaskContext must be used within a TasksProvider');
  }

  return context;
};

export  { TasksProvider, useTaskContext};
