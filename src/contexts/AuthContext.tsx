import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential,
  AuthError
} from 'firebase/auth';
import { auth } from '../firebase';

interface AuthContextType {
  currentUser: User | null;
  userRole: 'admin' | 'conversational' | 'standard' | 'demo';
  loginWithIDS: (email: string, password: string) => Promise<{ success: boolean; user?: User; error?: string }>;
  signup: (email: string, password: string, displayName?: string) => Promise<{ success: boolean; user?: User; error?: string }>;
  logout: () => Promise<{ success: boolean; error?: string }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  updateUserProfile: (profileData: { displayName?: string; photoURL?: string }) => Promise<{ success: boolean; error?: string }>;
  hasPermission: (requiredRole: 'admin' | 'conversational' | 'standard' | 'demo') => boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  // Initialize userRole from localStorage if available, otherwise default to 'standard'
  const [userRole, setUserRole] = useState<'admin' | 'conversational' | 'standard' | 'demo'>(() => {
    const savedRole = localStorage.getItem('userRole');
    return (savedRole as 'admin' | 'conversational' | 'standard' | 'demo') || 'standard';
  });
  const [loading, setLoading] = useState(true);

  // Custom function to set user role and persist it to localStorage
  const updateUserRole = (role: 'admin' | 'conversational' | 'standard' | 'demo') => {
    setUserRole(role);
    localStorage.setItem('userRole', role);
  };

  // Sign in with email and password (IDS login)
  const loginWithIDS = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Set user role based on email
      if (email === 'chat@invotra.com') {
        updateUserRole('conversational');
      } else if (email === 'demo@invotra.com') {
        updateUserRole('demo');
      } else if (email.includes('admin')) {
        updateUserRole('admin');
      } else {
        updateUserRole('standard');
      }
      
      return { success: true, user: userCredential.user };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: (error as AuthError).code };
    }
  };

  // Sign up with email and password
  const signup = async (email: string, password: string, displayName?: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the user's profile with display name if provided
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }
      
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: (error as AuthError).code };
    }
  };

  // Log out
  const logout = async () => {
    try {
      await signOut(auth);
      // Reset user role to standard and clear from localStorage
      updateUserRole('standard');
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  };

  // Reset password
  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as AuthError).code };
    }
  };

  // Update user profile
  const updateUserProfile = async (profileData: { displayName?: string; photoURL?: string }) => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, profileData);
        // Update the local state to reflect changes
        setCurrentUser({ ...auth.currentUser });
      }
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  };

  // Function to check if user has required permission
  const hasPermission = (requiredRole: 'admin' | 'conversational' | 'standard' | 'demo'): boolean => {
    if (requiredRole === 'standard') return true; // Everyone has standard permissions
    if (requiredRole === 'conversational') return userRole === 'conversational' || userRole === 'admin';
    if (requiredRole === 'demo') return userRole === 'demo' || userRole === 'admin';
    if (requiredRole === 'admin') return userRole === 'admin';
    return false;
  };

  // Effect to handle auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // Reset role to standard when user logs out
      if (!user) {
        // Only reset if there's no saved role (user actually logged out)
        // This prevents resetting on page refresh
        if (!localStorage.getItem('userRole')) {
          updateUserRole('standard');
        }
      } else if (user.email) {
        // If user is logged in and we're refreshing the page, set the role based on email
        // This ensures role is correctly set even after page refresh
        if (user.email === 'chat@invotra.com') {
          updateUserRole('conversational');
        } else if (user.email === 'demo@invotra.com') {
          updateUserRole('demo');
        } else if (user.email.includes('admin')) {
          updateUserRole('admin');
        }
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // Context value
  const value: AuthContextType = {
    currentUser,
    userRole,
    loginWithIDS,
    signup,
    logout,
    resetPassword,
    updateUserProfile,
    hasPermission
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
