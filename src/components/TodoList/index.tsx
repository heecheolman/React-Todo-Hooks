import React from 'react'
import classNames from 'classnames'

import Todo from '../../models/Todo'
import TodoList from '../../models/TodoList'
import TodoComponent from '../Todo'

import styles from './style.module.scss'

interface IProps {
  todoList: TodoList
  addTodo: (list: TodoList, message: string) => void
  className?: string
}

const TodoListComponent: React.FC<IProps> = ({
  todoList,
  addTodo,
  className,
}) => {
  const classProps = classNames(styles.default, className)
  const todos = todoList.getTodos().map((todo: Todo, index: number) => (
    <li key={`todo-${index}`}>
      <TodoComponent message={todo.getMessage()} />
    </li>
  ))

  return (
    <div>
      <button onClick={() => addTodo(todoList, 'HELLO WORLD')}>Add Todo</button>
      <ul className={classProps}>{todos}</ul>
    </div>
  )
}

export default TodoListComponent
