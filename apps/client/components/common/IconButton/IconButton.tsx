import React, { FC } from 'react';
import clsx from 'clsx';

import { ButtonIconProps, icons } from './IconButton.props';

export const IconButton: FC<ButtonIconProps> = ({
  icon,
  className,
  ...props
}) => {
  const Icon = icons[icon];

  return (
    <button
      className={clsx(
        'link inline-flex items-center justify-center p-1.5',
        {
          'text-zinc-50 xl:hidden': icon === 'burger',
          'text-neutral-950': icon === 'close',
        },
        className,
      )}
      aria-label={icon === 'burger' ? 'burger menu' : 'close menu'}
      type="button"
      {...props}
    >
      <Icon className={'h-7 w-7'} />
    </button>
  );
};
