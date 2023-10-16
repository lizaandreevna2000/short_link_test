import { useState } from 'react';
import { LinkService } from '../links_service';

export const useDeleteLink = (page: number) => {
  const [errorDelete, setErrorDelete] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const deleteLink = async (id: number) => {
    setIsLoadingDelete(true);
    try {
      await LinkService.deleteLink(id);
      const newData = await LinkService.getLinks(page, 5);
      return newData;
    } catch (e) {
      setErrorDelete(true);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  return { deleteLink, errorDelete, isLoadingDelete };
};
