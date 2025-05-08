import { User } from 'firebase/auth';
import { ReactNode } from 'react';

export interface AuthContextType {
  currentUser: User | null;
  loginWithIDS: (email: string, password: string) => Promise<{ success: boolean; user?: User; error?: string }>;
  signup: (email: string, password: string, displayName?: string) => Promise<{ success: boolean; user?: User; error?: string }>;
  logout: () => Promise<{ success: boolean; error?: string }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  updateUserProfile: (profileData: { displayName?: string; photoURL?: string }) => Promise<{ success: boolean; error?: string }>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export const useAuth: () => AuthContextType;
export const AuthProvider: React.FC<AuthProviderProps>;
export default AuthProvider;
