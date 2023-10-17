import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import { IPostLink } from '@client/api/types';

import { Card } from '@client/components/common/Card';
import { HiLink } from 'react-icons/hi2';
import { IconButton } from '@client/components/common/IconButton';

type Props = {
  item: IPostLink;
  deleteHandle: () => void;
};

export const LinkListCard: FC<Props> = ({ item, deleteHandle }) => {
  const router = useRouter();

  return (
    <Card variant="base" className="flex flex-wrap justify-between">
      <div className="flex w-full items-center  gap-x-3 md:w-auto">
        <HiLink className="h-7 w-7" />
        <a
          target="_blank"
          href="https://docs.nestjs.com/controllers"
          className="truncate hover:underline"
          rel="noreferrer"
        >
          {item.short_link}
        </a>
      </div>
      <div className="flex gap-x-3">
        <IconButton
          icon="more"
          onClick={() => router.push(`/my-urls/${item.id}`)}
        />
        <IconButton icon="delete" onClick={deleteHandle} />
      </div>
    </Card>
  );
};
