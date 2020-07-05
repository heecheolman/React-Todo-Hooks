import { useState } from 'react'
import Todo from '../models/Todo'
import TodoList from '../models/TodoList'

function useTodo() {
  const [todoListCollection, setTodoListCollection] = useState<TodoList[]>([])

  const reRender = (options: TodoList[] = []) => {
    setTodoListCollection([
      ...todoListCollection.filter((todoList) => !todoList.isRemoved()),
      ...options,
    ])
  }

  const addTodo = (list: TodoList, message: string) => {
    list.addTodo(message)
    reRender()
  }

  const removeTodo = (todo: Todo) => {
    todo.remove()
    reRender()
  }

  const addTodoList = () => {
    const todoList = new TodoList(['HELLO WORLD'])
    reRender([todoList])
  }

  const removeTodoList = (todoList: TodoList) => {
    todoList.remove()
    reRender()
  }

  return {
    todoListCollection,
    addTodoList,
    addTodo,
    removeTodo,
    removeTodoList,
  }
}

export default useTodo
