"use client";

import { createContext, useContext, useMemo, useState } from "react";

type ModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const WaitlistModalContext = createContext<ModalContextValue | null>(null);

export function WaitlistModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<ModalContextValue>(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [isOpen]
  );

  return (
    <WaitlistModalContext.Provider value={value}>
      {children}
    </WaitlistModalContext.Provider>
  );
}

export function useWaitlistModal() {
  const ctx = useContext(WaitlistModalContext);
  if (!ctx) {
    throw new Error("useWaitlistModal must be used within a WaitlistModalProvider");
  }
  return ctx;
}
