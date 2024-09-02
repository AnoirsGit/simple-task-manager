export interface ITask {
    id: string;
    parentId: string | null | undefined;
    title: string;
    description: string;
    statusId: string;
}