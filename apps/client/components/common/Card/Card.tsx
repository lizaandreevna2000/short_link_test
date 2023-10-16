import React, { FC } from 'react';
import clsx from 'clsx';

import { ICardProps } from './Card.props';

export const Card: FC<ICardProps> = ({ variant, className, children }) => {
  return (
    <div
      className={clsx(
        {
          'card-outline bg-zinc-50': variant === 'outlined',
          'card-base': variant === 'base',
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
