import { useState, useEffect } from 'react';
import { LinkService } from '../links_service';
import { IPostLink } from '../types';

export const useGetSingleLink = (id: number) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState<IPostLink | null>(null);

  useEffect(() => {
    const getLink = async () => {
      setIsLoading(true);
      try {
        const linkData = await LinkService.getLink(id);
        setLink(linkData);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getLink();
  }, [id]);

  return { link, error, isLoading };
};
