"use client"

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

const SessionHandler = ({ children } : {children: ReactNode}) => (
  <SessionProvider>
    {children}
  </SessionProvider>
);

export default SessionHandler;
