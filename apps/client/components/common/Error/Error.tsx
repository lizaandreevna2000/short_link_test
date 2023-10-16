import React from 'react';
import { Typography } from '@client/components/common/Typography';

export const Error = () => {
  return (
    <div className="mx-auto w-full rounded bg-zinc-50 p-5 font-sans text-neutral-400 md:max-w-[704px] md:p-8 xl:max-w-[1040px]">
      <Typography tag="h3" className="text-red-600">
        Something error
      </Typography>
    </div>
  );
};
