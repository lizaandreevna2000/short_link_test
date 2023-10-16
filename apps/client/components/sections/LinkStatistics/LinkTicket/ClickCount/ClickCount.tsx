import React, { FC } from 'react';

import Time from '@client/public/images/time.svg';

type Props = {
  count_click: number;
};

export const ClickCount: FC<Props> = ({ count_click }) => {
  return (
    <span className="flex items-center gap-x-2">
      <Time className={'inline h-5 w-5'} />
      {`${count_click} ${count_click > 1 ? 'clicks' : 'click'}`}
    </span>
  );
};
