import './globals.css';

import React, { ReactNode } from 'react';
import { Overpass } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import clsx from 'clsx';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';

const overpass: NextFont = Overpass({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <title>Short URL</title>
      </head>

      <body
        className={clsx(
          overpass.className,
          'flex h-full min-h-screen flex-col',
        )}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
