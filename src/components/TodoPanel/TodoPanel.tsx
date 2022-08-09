import React, { ChangeEvent, FC, useState } from 'react';
import { TodoItem, TodoInput } from '../../interface/interface';
import './TodoPanel.css'

interface TodoPanelProps {
  addTodo: (
    {taskName, taskDescription}: Omit<TodoItem, 'id' | 'isCompleated'>
  ) => void;
}

const TodoPanel: FC<TodoPanelProps> = ({addTodo}) => {
  const [todo, setTodo] = useState<TodoInput>({
      taskName: '',
      taskDescription: '',
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({...todo, [name]: value })
  }

  const clearInputs = () => {
    setTodo({taskName: '', taskDescription: ''})
  }

  return (
    <div className='todoPanel'>
      <input 
        className='todoPanel_input'
        type="text" 
        name='taskName' 
        id='taskName' 
        placeholder='Name'
        value={todo.taskName} 
        onChange={onChange}
      />

      <input 
        className='todoPanel_input'
        type="text" 
        name='taskDescription' 
        id='taskDescription' 
        placeholder='Description'
        value={todo.taskDescription} 
        onChange={onChange}
        />

      <button 
        onClick={() => {
          addTodo({...todo})
          clearInputs()}}
      >
        Add
      </button> 
    </div>
  );
};

export default TodoPanel;