import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useTaskContext } from "../../../../app/providers/task-provider";
import { ITask } from "../../../../entities/task/task.model";
import { useForm, Controller } from "react-hook-form";
import ModalHeader from "../../../../shared/ui/modal/layout/modal-header-wrapper";
import ModalContent from "../../../../shared/ui/modal/layout/modal-content-wrapper";
import ModalFooter from "../../../../shared/ui/modal/layout/modal-footer-wrapper";
import "./index.css";
import { STATUSES_MOCKS } from "../../../../shared/mocks/statuses-mocks";
import { Icon } from "@iconify/react";

const TaskFormPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [task, setTask] = useState<ITask | undefined>();
  const [error, setError] = useState<{ [key: string]: string }>({});
  const { getTaskById, updateTask, addTask } = useTaskContext();
  const navigate = useNavigate();

  const { control, handleSubmit, setValue } = useForm<ITask>({
    defaultValues: {
      title: searchParams.get("title") || "",
      description: searchParams.get("description") || "",
      statusId: searchParams.get("statusId") || "",
    },
  });

  useEffect(() => {
    if (id) {
      const fetchedTask = getTaskById(id);
      setTask(fetchedTask);
      if (fetchedTask) {
        setValue("title", fetchedTask.title);
        setValue("description", fetchedTask.description);
        setValue("statusId", fetchedTask.statusId);
      }
    }
  }, [id, getTaskById, setValue]);

  const validate = (data: ITask) => {
    const errors: any = {};
    if (data.title.length < 4) {
      errors.title = "Title must be at least 4 characters";
    }
    if (data.description.length < 10) {
      errors.description = "Description must be at least 10 characters";
    }
    if (!data.statusId) {
      errors.statusId = "Status is required";
    }
    return errors;
  };

  const onSubmit = (data: ITask) => {
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
  
    const parentId = searchParams.get("parentId") || null;
  
    if (id) updateTask({ ...data, id, parentId: parentId || data.parentId });
    else addTask({ ...data, id: new Date().toISOString(), parentId });
  
    navigate("/tasks");
  };
  

  const handleClose = () => navigate(-1);

  return (
    <>
      <ModalHeader>
        <h2 className="text-lg font-semibold">
          {id ? "Edit Task" : "Create New Task"}
        </h2>
        <div className="flex gap-6 ">
          {searchParams.get("parentId") && (
            <Link
              to={`/tasks/${searchParams.get("parentId")}`}
              className="flex gap-1"
            >
              <div className="">parent task Id </div>
              <Icon icon="basil:forward-solid" className="text-2xl" />
            </Link>
          )}
          <button type="button" onClick={handleClose}>
            X
          </button>
        </div>
      </ModalHeader>
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)} className="text-slate-700">
          <div className="flex flex-col">
            <label className="text-white" htmlFor="title">
              Title
            </label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => <input {...field} />}
            />
            {error.title && <p className="text-red-500">{error.title}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-white" htmlFor="description">
              Description
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => <textarea {...field} />}
            />
            {error.description && (
              <p className="text-red-500">{error.description}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-white" htmlFor="statusId">
              Status
            </label>
            <Controller
              name="statusId"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  style={{
                    backgroundColor: "#555",
                    color: "#fff",
                    border: "1px solid #666",
                  }}
                >
                  <option value="">Select a status</option>
                  {STATUSES_MOCKS.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.title}
                    </option>
                  ))}
                </select>
              )}
            />
            {error.statusId && <p className="text-red-500">{error.statusId}</p>}
          </div>
          <ModalFooter>
            <button
              className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-1 rounded-xl"
              type="submit"
            >
              Save
            </button>
            <button
              className="text-white bg-gray-500 hover:bg-gray-700 px-4 py-1 rounded-xl"
              type="button"
              onClick={handleClose}
            >
              Cancel
            </button>
          </ModalFooter>
        </form>
      </ModalContent>
    </>
  );
};

export default TaskFormPage;
