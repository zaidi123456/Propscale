'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const MarketRotationContext = createContext(0);

export function MarketRotationProvider({ children }) {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      setMessageIndex(index => (index + 1) % 3);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <MarketRotationContext.Provider value={messageIndex}>
      {children}
    </MarketRotationContext.Provider>
  );
}

export function useMarketRotation() {
  return useContext(MarketRotationContext);
}
