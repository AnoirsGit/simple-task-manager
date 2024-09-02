
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from '../../pages/not-found'
import Tasks from "../../pages/tasks";
import TaskForm from "../../pages/tasks/form/form";
import Task from "../../pages/tasks/task/task";

export const Router = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Navigate to="/tasks" />} />
    <Route path="/tasks" element={<Tasks />} />
    <Route path="/tasks/:id" element={<Task />} />
    <Route path="/tasks/form" element={<TaskForm />} />
    <Route path="/tasks/form/:id" element={<TaskForm />} />
    <Route path="/404" element={<NotFound />} />
  </Routes>
);