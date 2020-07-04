import React from 'react'
import classNames from 'classnames'

import TodoList from '../../models/TodoList'
import TodoComponent from '../Todo'

import styles from './style.module.scss'

interface IProps {
  todoList: TodoList
  className?: string
  addTodo: (list: TodoList, message: string) => void
  removeTodo: (list: TodoList, key: string) => void
}

const TodoListComponent: React.FC<IProps> = ({
  todoList,
  className,
  addTodo,
  removeTodo,
}) => {
  const classProps = classNames(styles.default, className)

  const todos = todoList.getTodos().map((todo) => {
    return (
      <li key={todo.getKey()}>
        <TodoComponent
          message={todo.getMessage()}
          removeTodo={() => removeTodo(todoList, todo.getKey())}
        />
      </li>
    )
  })

  return (
    <div>
      <button onClick={() => addTodo(todoList, 'HELLO WORLD')}>Add Todo</button>
      <ul className={classProps}>{todos}</ul>
    </div>
  )
}

export default TodoListComponent
