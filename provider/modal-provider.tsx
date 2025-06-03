'use client';
import React, { createContext, useState, useCallback } from 'react';

interface IProps {
  open: boolean;
  handleModalState: () => void;
}

export const globalModalContext = createContext<IProps>({
  open: false,
  handleModalState: () => {},
});

export default function GlobalModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const handleModalState = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <globalModalContext.Provider value={{ open, handleModalState }}>
      {children}
    </globalModalContext.Provider>
  );
}
