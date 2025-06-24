import React, { useEffect } from 'react';

// This component injects environment variables into the window object
export function EnvProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Make environment variables available to client-side code
    if (typeof window !== 'undefined') {
      (window as any).__env = {
        NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY
      };
    }
  }, []);

  return <>{children}</>;
}
