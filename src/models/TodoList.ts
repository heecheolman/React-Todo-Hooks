import Todo from './Todo'

interface ITodoAddable {
  addTodo: (message: string) => void
}

interface ITodoRemovable {
  removeTodo: (index: number) => void
}

class TodoList implements ITodoAddable, ITodoRemovable {
  private todos: Todo[] = []

  constructor(messageList: string[]) {
    this.todos = messageList.map((message) => new Todo(message))
  }

  getTodos(): Todo[] {
    return this.todos
  }

  addTodo(message: string): void {
    this.todos.push(new Todo(message))
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1)
  }
}

export default TodoList
