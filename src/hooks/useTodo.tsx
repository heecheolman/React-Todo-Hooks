import { useState } from 'react'
import TodoList from '../models/TodoList'

function useTodo() {
  const [todoListCollection, setTodoListCollection] = useState<TodoList[]>([])

  const reRender = (options: TodoList[] = []) => {
    setTodoListCollection([...todoListCollection, ...options])
  }

  const addTodo = (list: TodoList, message: string) => {
    list.addTodo(message)
    reRender()
  }

  const removeTodo = (list: TodoList, key: string) => {
    list.removeTodo(key)
    reRender()
  }

  const addTodoList = () => {
    const todoList = new TodoList(['HELLO WORLD'])
    setTodoListCollection([...todoListCollection, todoList])
    reRender([todoList])
  }

  return {
    todoListCollection,
    addTodoList,
    addTodo,
    removeTodo,
  }
}

export default useTodo
