import Todo from './Todo'

import { IRemovable, RemoveState } from './Removable'

class TodoList implements IRemovable {
  private todos: Todo[] = []
  removeState: RemoveState = RemoveState.IDLE

  constructor(messageList: string[]) {
    this.todos = messageList.map(
      (message) => new Todo(`todo-${Math.random()}`, message)
    )
  }

  remove(): void {
    this.removeState = RemoveState.REMOVED
  }

  getTodos(): Todo[] {
    return this.todos.filter((todo) => !todo.isRemoved())
  }

  addTodo(message: string): void {
    this.todos.push(new Todo(`todo-${Math.random()}`, message))
  }

  isRemoved() {
    return this.removeState === RemoveState.REMOVED
  }
}

export default TodoList
