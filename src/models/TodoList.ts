import Todo from './Todo'

interface ITodoAddable {
  addTodo: (message: string) => void
}

interface ITodoRemovable {
  removeTodo: (key: string) => void
}

class TodoList implements ITodoAddable, ITodoRemovable {
  private todos: Todo[] = []

  constructor(messageList: string[]) {
    this.todos = messageList.map(
      (message) => new Todo(`todo-${Math.random()}`, message)
    )
  }

  getTodos(): Todo[] {
    return this.todos
  }

  addTodo(message: string): void {
    this.todos.push(new Todo(`todo-${Math.random()}`, message))
  }

  removeTodo(key: string): void {
    this.todos = this.todos.filter((todo) => todo.getKey() !== key)
  }
}

export default TodoList
