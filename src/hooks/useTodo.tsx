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

  const addTodoList = () => {
    const todoList = new TodoList(['1', '2', '3'])
    setTodoListCollection([...todoListCollection, todoList])
    reRender([todoList])
  }

  return {
    todoListCollection,
    addTodoList,
    addTodo,
  }
}

export default useTodo
