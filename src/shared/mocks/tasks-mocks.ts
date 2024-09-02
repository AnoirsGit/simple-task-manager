import { ITask } from "../../entities/task/task.model";

export const TASKS_MOCKS: ITask[] = [
    {
        id: "1",
        parentId: null,
        title: "Task 1",
        description: "Description for Task 1",
        statusId: "status1"
    },
    {
        id: "2",
        parentId: null,
        title: "Task 2",
        description: "Description for Task 2",
        statusId: "status2"
    },
    {
        id: "3",
        parentId: null,
        title: "Task 3",
        description: "Description for Task 3",
        statusId: "status3"
    },
    {
        id: "4",
        parentId: null,
        title: "Task 4",
        description: "Description for Task 4",
        statusId: "status4"
    }
]