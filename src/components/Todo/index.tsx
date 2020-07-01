import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

interface IProps {
  message: string
  className?: string
}

const TodoComponent: React.FC<IProps> = ({ message, className }) => {
  const classProps = classNames(styles.default, className)

  return <div className={classProps}>{message}</div>
}

export default TodoComponent
