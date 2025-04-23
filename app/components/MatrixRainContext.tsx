'use client';

import React, { createContext, useContext, useState } from 'react';

interface MatrixRainContextType {
  showMatrixRain: boolean;
  setShowMatrixRain: (show: boolean) => void;
}

const MatrixRainContext = createContext<MatrixRainContextType | undefined>(undefined);

export function MatrixRainProvider({ children }: { children: React.ReactNode }) {
  const [showMatrixRain, setShowMatrixRain] = useState(false);

  return (
    <MatrixRainContext.Provider value={{ showMatrixRain, setShowMatrixRain }}>
      {children}
    </MatrixRainContext.Provider>
  );
}

export function useMatrixRain() {
  const context = useContext(MatrixRainContext);
  if (context === undefined) {
    throw new Error('useMatrixRain must be used within a MatrixRainProvider');
  }
  return context;
} 