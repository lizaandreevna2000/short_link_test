import React from 'react';
import { LinkStatistics } from '@client/components/sections/LinkStatistics';
import { LinkService } from '@client/api/links_service';

export async function generateStaticParams() {
  const linksData = await LinkService.getLinks();

  return linksData?.links.map(item => ({
    slug: item?.id.toString(),
  }));
}

export default function LinkSinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <main className="flex-grow">
      <LinkStatistics slug={parseInt(slug)} />
    </main>
  );
}
