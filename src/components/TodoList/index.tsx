import React from 'react'
import classNames from 'classnames'

import Todo from '../../models/Todo'
import TodoList from '../../models/TodoList'
import TodoComponent from '../Todo'

import styles from './style.module.scss'

interface IProps {
  todoList: TodoList
  className?: string
  addTodo: (list: TodoList, message: string) => void
  removeTodo: (todo: Todo) => void
  removeTodoList: (todoList: TodoList) => void
}

const TodoListComponent: React.FC<IProps> = ({
  todoList,
  className,
  addTodo,
  removeTodo,
  removeTodoList,
}) => {
  const classProps = classNames(styles.default, className)

  const todos = todoList.getTodos().map((todo) => {
    return (
      <li key={todo.getKey()}>
        <TodoComponent todo={todo} removeTodo={removeTodo} />
      </li>
    )
  })

  return (
    <div>
      <button onClick={() => addTodo(todoList, 'HELLO WORLD')}>Add Todo</button>
      <ul className={classProps}>{todos}</ul>
      <button onClick={() => removeTodoList(todoList)}>TODOLIST 제거</button>
    </div>
  )
}

export default TodoListComponent
