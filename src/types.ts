export enum TodoStatus {
    Pending = "pending", 
    inProgress = "in progress",
    Completed = "completed"
}

export interface Todo {
    id:number,
    title:string,
    description:string,
    status:TodoStatus
}
