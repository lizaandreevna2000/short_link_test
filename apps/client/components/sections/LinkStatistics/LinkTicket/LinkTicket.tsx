import React, { FC } from 'react';

import { Props } from './LinkTicket.props';
import { Card } from '@client/components/common/Card';
import { Typography } from '@client/components/common/Typography';
import { ClickCount } from './ClickCount';

export const LinkTicket: FC<Props> = ({ linkData }) => {
  return (
    <Card
      variant="base"
      className="relative grid w-full grid-cols-[1fr] rounded border border-neutral-200 px-0 py-0 shadow-lg  md:grid-cols-[1fr_300px]  xl:grid-cols-[1fr_1fr]"
    >
      <div className="py-5 pl-5 xl:py-8 xl:pl-8">
        <Typography tag="h3">From</Typography>
        <Typography tag="p" className="mt-10 max-w-[300px] truncate">
          {linkData?.original_link}
        </Typography>
      </div>
      <div className="time-line__text absolute left-0 top-[135px] -mt-2.5 flex w-full gap-x-5 whitespace-nowrap font-sans text-base font-normal not-italic text-cyan-650 md:hidden">
        {linkData && <ClickCount count_click={linkData?.count_click} />}
      </div>

      <div className="px-5 py-5 xl:py-8">
        <Typography tag="h3">To</Typography>
        <Typography tag="p" className="mt-10 max-w-min">
          {linkData?.short_link}
        </Typography>
      </div>

      <div className="time-line__text absolute left-0 top-[72px] -mt-2.5 hidden w-full gap-x-5 whitespace-nowrap font-sans text-base font-normal not-italic text-cyan-650 md:flex xl:left-0 xl:top-20 xl:flex">
        <span className="flex items-center gap-x-2">
          {linkData && <ClickCount count_click={linkData?.count_click} />}
        </span>
      </div>
    </Card>
  );
};
