import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cyber Portfolio',
  description: 'A modern portfolio showcasing my work and skills.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <MainContent>
          <Navbar />
          {children}
        </MainContent>
      </body>
    </html>
  );
} 