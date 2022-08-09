import React, { FC, useState, ChangeEvent } from 'react';
import { TodoItem } from '../../interface/interface';
import './TodoItemComponent.css'

interface TodoItemComponentProps {
  todo: TodoItem;
  checkTodo: (id: TodoItem['id']) => void;
  deleteTodo: (id: TodoItem['id']) => void;
  editTodo: (
    id: TodoItem['id'], 
    newTaskName: TodoItem['taskName'],
    newTaskDescription: TodoItem['taskDescription']
  ) => void;
}

const TodoItemComponent: FC<TodoItemComponentProps> = ({ 
  todo, 
  checkTodo, 
  deleteTodo,
  editTodo
}) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [newtodo, setNewTodo] = useState({
    newTaskName: todo.taskName,
    newTaskDescription: todo.taskDescription,
  })
  
  const editing = () => {
    setEdit(!edit)
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewTodo({...newtodo, [name]: value })
  }

  return (
    <div className='todoItem'>
      <div className="todoItemIform">
        {edit 
          ? (<input
              className='todoItemName'   
              type="text" 
              value={newtodo.newTaskName}
              onChange={onChange} 
              name="newTaskName" 
              id="newTaskName" 
            />)
          : (<h3 onClick={() => checkTodo(todo.id)} style={{textDecoration: todo.isCompleated 
            ? 'line-through' 
            : 'none' }}>{todo.taskName}</h3>)}
        {edit
          ? <input
              className='todoItemDescription' 
              type="text" 
              value={newtodo.newTaskDescription}
              onChange={onChange}
              name="newTaskDescription" 
              id="newTaskDescription" 
            />
          : <p>{todo.taskDescription}</p>}
      </div>
      {edit 
        ? <div className="todoItemButtons">
            <button 
              className='todoComponentButton compleateButton' 
              onClick={() => {
                editTodo(
                  todo.id, 
                  newtodo.newTaskName, 
                  newtodo.newTaskDescription)
              
                editing()
              }}
            >Comleate</button>
          </div>
        : <div className="todoItemButtons">
            {todo.isCompleated 
              || <button 
                  className='todoComponentButton editButton' 
                  onClick={editing}
                >Edit</button>}
            <button 
              className='todoComponentButton dellButton' 
              onClick={() => deleteTodo(todo.id)}
            >Delete</button>
          </div>}
      </div>
  );
};

export default TodoItemComponent;