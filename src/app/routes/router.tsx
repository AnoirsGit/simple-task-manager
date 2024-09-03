import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../../pages/not-found";
import TasksPage from "../../pages/tasks/";
import TaskPage from "../../pages/tasks/task/index";
import TaskFormPage from "../../pages/tasks/task/form";
import RouterModal from "../../shared/ui/modal/router-modal";

export const Router = () => (
  <Routes>
    <Route path="*" element={<NotFound />} />
    <Route path="/" element={<Navigate to="/tasks" />} />
    <Route path="/tasks" element={<TasksPage />}>
      <Route  element={<RouterModal />}>
        <Route path="/tasks/new" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskPage />} />
        <Route path="/tasks/form/:id" element={<TaskFormPage />} />
      </Route>
    </Route>
    <Route path="/404" element={<NotFound />} />
  </Routes>
);
