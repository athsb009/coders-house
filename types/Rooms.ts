export enum RoomType {
  LOBBY = 'lobby',
  PUBLIC = 'coderhouse',
  CUSTOM = 'custom',
}

export interface IRoomData {
  name: string
  description: string
  password: string | null
  autoDispose: boolean
}
