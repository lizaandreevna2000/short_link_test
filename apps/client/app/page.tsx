import React from 'react';

import { Hero } from '@client/components/sections/Hero';

export default function Home() {
  console.log('hello');
  return (
    <main className="flex-grow">
      <Hero />
    </main>
  );
}
