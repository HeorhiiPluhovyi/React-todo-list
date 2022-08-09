import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import TodoPanel from './components/TodoPanel/TodoPanel';
import { TodoItem } from './interface/interface';


const defaultList: TodoItem[] = [
  {
    id: 0,
    taskName: 'HTML',
    taskDescription: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
    isCompleated: false,
  },
  {
    id: 1,
    taskName: 'CSS',
    taskDescription: 'SS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.',
    isCompleated: false,
  },
  {
    id: 2,
    taskName: 'JS',
    taskDescription: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).',
    isCompleated: false,
  },
  {
    id: 3,
    taskName: 'Typescript',
    taskDescription: 'TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.',
    isCompleated: true,
  },

]

function App() {
  const [todos, setTodoList] = useState<TodoItem[]>(defaultList)

  const addTodo = (
    {taskName, taskDescription}: Omit<TodoItem, 'id' | 'isCompleated'>
  ) => {
    setTodoList([...todos, {
      id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
      taskName,
      taskDescription,
      isCompleated: false,
    }])
  }

  const checkTodo = (id: TodoItem['id']) => {
    setTodoList(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, isCompleated: !todo.isCompleated};
      }

      return todo;
    }))
  }

  const deleteTodo = (id: TodoItem['id']) => {
    setTodoList(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (
    id: TodoItem['id'], 
    newTaskName: TodoItem['taskName'],
    newTaskDescription: TodoItem['taskDescription']
  ) => {
    setTodoList(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, 
          taskDescription: newTaskDescription, 
          taskName: newTaskName
        };
      }

      return todo;
    }))
  }
  
  return (
    <div className="App">
      <Header todoCount={todos.length}/>
      <TodoPanel addTodo={addTodo}/>
      <TodoList 
        todos={todos} 
        checkTodo={checkTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        />
    </div>
  );
}

export default App;
