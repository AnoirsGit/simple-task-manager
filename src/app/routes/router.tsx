
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from '../../pages/not-found'
import TasksPage from "../../pages/tasks";
import TaskFormPage from "../../pages/tasks/form/form";
import TaskPage from "../../pages/tasks/task/task";

export const Router = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Navigate to="/tasks" />} />
    <Route path="/tasks" element={<TasksPage />} />
    <Route path="/tasks/:id" element={<TaskPage />} />
    <Route path="/tasks/form" element={<TaskFormPage />} />
    <Route path="/tasks/form/:id" element={<TaskFormPage />} />
    <Route path="/404" element={<NotFound />} />
  </Routes>
);