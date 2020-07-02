export interface ITodo {
  message: string
}

class Todo {
  private message: string = ''

  constructor(message: string) {
    this.message = message
  }

  getMessage(): string {
    return this.message
  }
}

export default Todo
