import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

interface IProps {
  message: string
  className?: string
  removeTodo: () => void
}

const TodoComponent: React.FC<IProps> = ({
  message,
  className,
  removeTodo,
}) => {
  const classProps = classNames(styles.default, className)

  return (
    <div className={classProps}>
      {message}
      <button onClick={() => removeTodo()}>X</button>
    </div>
  )
}

export default TodoComponent
