export interface TodoItem {
  id: number;
  taskName: string;
  taskDescription: string;
  isCompleated: boolean;
}

export interface TodoInput {
  taskName: string;
  taskDescription: string
}
