import { User } from './user';

export interface SessionState {
  user: User | null
  isAuthenticated: boolean;
}
