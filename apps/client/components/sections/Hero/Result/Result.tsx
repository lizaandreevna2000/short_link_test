import React, { FC, useCallback, useState } from 'react';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Props } from './Result.props';
import { Typography } from '@client/components/common/Typography';

export const Result: FC<Props> = ({ original_link, short_link, id }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(() => {
    setCopied(true);
  }, []);

  return (
    <div className="mx-auto w-full rounded bg-zinc-50 p-5 font-sans text-neutral-400 md:max-w-[704px] md:p-8 xl:max-w-[1040px]">
      <div className="flex items-center justify-between">
        <a href={short_link}>{short_link}</a>
        <div className="flex items-center gap-x-3">
          <CopyToClipboard onCopy={onCopy} text={short_link}>
            <button
              type="button"
              className="link rounded bg-orange-550 px-7 py-3 text-base font-medium text-zinc-50 md:col-span-2 xl:col-span-1"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </CopyToClipboard>
          <Link href={`/my-urls/${id}`}>Get details</Link>
        </div>
      </div>
      <Typography tag="p" className="mt-5">
        Your original link: {original_link}
      </Typography>
    </div>
  );
};
