import React from 'react'
import TodoListComponent from '../../components/TodoList'

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <TodoListComponent messageList={['1', '2', '3', '4', '5']} />
    </div>
  )
}

export default Home
