import { IRemovable, RemoveState } from '../models/Removable'

export interface ITodo {
  key: string
  message: string
}

class Todo implements IRemovable {
  private message: string = ''
  private key: string = ''

  removeState = RemoveState.IDLE

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

  remove() {
    this.removeState = RemoveState.REMOVED
  }

  isRemoved() {
    return this.removeState === RemoveState.REMOVED
  }
}

export default Todo
