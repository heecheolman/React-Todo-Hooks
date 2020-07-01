import React from 'react'
import classNames from 'classnames'

import TodoComponent from '../Todo'

import styles from './style.module.scss'

interface IProps {
  messageList: string[]
  className?: string
}

const TodoListComponent: React.FC<IProps> = ({ messageList, className }) => {
  const classProps = classNames(styles.default, className)
  const todos = messageList.map((message, index) => (
    <li key={`message-${index}`}>
      <TodoComponent message={message} />
    </li>
  ))
  return <ul className={classProps}>{todos}</ul>
}

export default TodoListComponent
