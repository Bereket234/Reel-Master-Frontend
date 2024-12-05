'use client';

// import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

function Providers({ children }: { children: ReactNode }) {
  return (
      // <SessionProvider>
      <div>{children}</div>
      // </SessionProvider>
  );
}

export default Providers;
