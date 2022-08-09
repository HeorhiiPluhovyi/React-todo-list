import React, { FC } from 'react';
import { TodoItem } from '../../interface/interface';
import TodoItemComponent from './TodoItemComponent';
import './TodoList.css'

interface TodoListProps {
  todos: TodoItem[];
  checkTodo: (id: TodoItem['id']) => void;
  deleteTodo: (id: TodoItem['id']) => void;
  editTodo: (
    id: TodoItem['id'], 
    newTaskName: TodoItem['taskName'],
    newTaskDescription: TodoItem['taskDescription']
  ) => void;
}

const TodoList: FC<TodoListProps> = ({ 
  todos, 
  checkTodo, 
  deleteTodo, 
  editTodo
}) => (
    <div className='todoList'>
      {todos.map((todo) => (
        <TodoItemComponent 
          todo={todo} 
          checkTodo={checkTodo} 
          key={todo.id}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          />
        ))}
    </div>
);

export default TodoList;