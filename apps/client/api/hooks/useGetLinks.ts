import { useState, useEffect } from 'react';
import { LinkService } from '../links_service';
import { IPostLink } from '../types';
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from '@client/constants/pagination';

export const useGetLinks = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allLinksData, setAllLinksData] = useState<IPostLink[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const linksData = await LinkService.getLinks(page, DEFAULT_PER_PAGE);
        setAllLinksData(linksData?.links);
        setTotal(linksData.total);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    allLinksData?.length === 0 && page !== DEFAULT_PAGE && setPage(page - 1);
  }, [allLinksData, page]);

  const loadMoreData = (page: { selected: number }) => {
    setPage(page.selected + 1);
  };

  return {
    allLinksData,
    setAllLinksData,
    error,
    setError,
    isLoading,
    loadMoreData,
    setTotal,
    total,
    page,
  };
};
