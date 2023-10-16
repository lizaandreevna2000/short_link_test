import React, { FC } from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  variant: 'hero' | 'default';
  className?: string;
  anchor?: string;
};

export const Section: FC<Props> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <section
      className={clsx(
        {
          'pb-[84px] pt-[140px] md:pb-[138px] md:pt-48 xl:pb-[214px] xl:pt-[252px]':
            variant === 'hero',
          'py-10 md:py-[60px] xl:py-[80px]': variant === 'default',
        },
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
