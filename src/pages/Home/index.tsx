import React from 'react'

import TodoList from '../../models/TodoList'

import TodoListComponent from '../../components/TodoList'
import useTodo from '../../hooks/useTodo'

const Home: React.FC = () => {
  const { todoListCollection, addTodoList, addTodo, removeTodo } = useTodo()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => addTodoList()}>ADD TODOLIST</button>
      {todoListCollection.map((todoList: TodoList, index: number) => (
        <TodoListComponent
          key={`todo-list-${index}`}
          todoList={todoList}
          addTodo={addTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  )
}

export default Home
