import React from 'react'
import classNames from 'classnames'
import Todo from '../../models/Todo'

import styles from './style.module.scss'

interface IProps {
  todo: Todo
  className?: string
  removeTodo: (todo: Todo) => void
}

const TodoComponent: React.FC<IProps> = ({ todo, className, removeTodo }) => {
  const classProps = classNames(styles.default, className)

  return (
    <div className={classProps}>
      {todo.getMessage()}
      <button onClick={() => removeTodo(todo)}>X</button>
    </div>
  )
}

export default TodoComponent
