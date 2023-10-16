'use client';

import React from 'react';
// import { useParams } from 'next/navigation';

import { useGetSingleLink } from '@client/api/hooks/useGetSingleLink';
import { Section } from '@client/components/common/Section';
import { Typography } from '@client/components/common/Typography';
import { LinkTicket } from './LinkTicket';

export const LinkStatistics = ({ slug }: { slug: number }) => {
  // const { slug } = useParams();
  const id = slug;
  const { link, isLoading, error } = useGetSingleLink(id);

  return (
    <Section variant="default">
      <div className="container">
        <Typography tag="h2" className="mb-5 xl:mb-8">
          Link statistics
        </Typography>
        <div className="m-auto flex max-w-[1008px] flex-col items-center space-y-5">
          {error && (
            <Typography tag="h3" className="text-red-600">
              Something error
            </Typography>
          )}
          {!isLoading && <LinkTicket linkData={link} />}
        </div>
      </div>
    </Section>
  );
};
