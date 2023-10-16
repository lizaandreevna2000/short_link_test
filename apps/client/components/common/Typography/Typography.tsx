'use client';

import React, { FC } from 'react';
import clsx from 'clsx';

import { TypographyProps } from './Typography.props';

export const Typography: FC<TypographyProps> = ({
  tag = 'p',
  children,
  variant,
  className,
}) => {
  const Tag = tag;

  return (
    <Tag
      className={clsx(
        'font-sans not-italic text-neutral-950',
        {
          'text-4xl font-extrabold text-zinc-50 md:text-7xl': tag === 'h1',
          'text-2xl font-bold md:text-4xl': tag === 'h2',
          'text-2xl font-semibold': tag === 'h3',
          'text-lg font-normal': variant === 'subtitle',
        },
        className,
      )}
    >
      {children}
    </Tag>
  );
};
