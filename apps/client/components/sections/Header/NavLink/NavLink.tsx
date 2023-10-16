import React, { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type Props = {
  name: string;
  url: string;
  className?: string;
};

export const NavLink: FC<Props> = ({ name, url, className }) => {
  return (
    <Link className={clsx(className)} href={url}>
      {name}
    </Link>
  );
};
