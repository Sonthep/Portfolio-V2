'use client';

import React from 'react';
import MatrixRain from './MatrixRain';
import { MatrixRainProvider, useMatrixRain } from './MatrixRainContext';

function MatrixRainWrapper() {
  const { showMatrixRain } = useMatrixRain();
  return showMatrixRain ? <MatrixRain /> : null;
}

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <MatrixRainProvider>
      <MatrixRainWrapper />
      <main className="min-h-screen relative">
        {children}
      </main>
    </MatrixRainProvider>
  );
} 