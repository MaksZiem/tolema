export interface User {
  id: string
  email: string
  status: 'logged' | 'guest'
  createdAt: Date
}