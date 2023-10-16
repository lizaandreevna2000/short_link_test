import { useState } from 'react';
import { LinkService } from '../links_service';
import { IPostLinkBody, IPostLink } from '../types';

export const useCreateShortLink = () => {
  const [shortLinkData, setShortLinkData] = useState<IPostLink | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getShortLink = async (body: IPostLinkBody) => {
    setIsLoading(true);
    try {
      const newLink = await LinkService.postLinkForShort(body);
      setShortLinkData(newLink);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { getShortLink, shortLinkData, error, isLoading };
};
