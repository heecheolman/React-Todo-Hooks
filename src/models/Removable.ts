export interface IRemovable {
  remove(): void
  removeState: RemoveState
}

export enum RemoveState {
  IDLE,
  REMOVING,
  REMOVED,
}
