export interface ITodo {
  key: string
  message: string
}

class Todo {
  private message: string = ''
  private key: string = ''

  constructor(key: string, message: string) {
    this.key = key
    this.message = message
  }

  getMessage(): string {
    return this.message + this.key
  }

  getKey(): string {
    return this.key
  }
}

export default Todo
