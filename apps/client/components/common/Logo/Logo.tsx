import React from 'react';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'} className="text-4xl font-bold text-white">
      Short URL
    </Link>
  );
};
