'use client';

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import { DEFAULT_PER_PAGE } from '@client/constants/pagination';
import { LinkListCard } from './LinkListCard';
import { useGetLinks } from '@client/api/hooks/useGetLinks';
import { useDeleteLink } from '@client/api/hooks/useDeleteLink';
import { Section } from '@client/components/common/Section/Section';
import { Typography } from '@client/components/common/Typography';
import { Modal } from '@client/components/common/Modal';
import { Error } from '@client/components/common/Error';

export const LinkList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setIsCurrentId] = useState(0);

  const {
    allLinksData,
    setAllLinksData,
    setTotal,
    isLoading,
    loadMoreData,
    total,
    page,
    error,
    setError,
  } = useGetLinks();

  const { deleteLink } = useDeleteLink(page);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (id: number) => {
    setIsOpen(true);
    setIsCurrentId(id);
  };

  const deleteHandle = async () => {
    const newData = await deleteLink(currentId);
    if (newData) {
      setAllLinksData(newData?.links);
      setTotal(newData.total);
    } else {
      setError(true);
    }
    setIsOpen(false);
  };

  return (
    <Section variant="default">
      {error && !allLinksData && <Error />}
      {!isLoading && (
        <>
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            onClickHandle={deleteHandle}
            content={{
              title: 'are you sure you want to remove the link?',
              description: 'you will lose all changes',
            }}
          />
          <div className="container">
            <Typography tag="h2" className="mb-8">
              My URLs
            </Typography>
            <div className="m-auto flex  max-w-[1008px] flex-col items-center space-y-5">
              {!isLoading && (
                <div className="w-full space-y-5">
                  {allLinksData?.map(item => (
                    <LinkListCard
                      key={item.id}
                      item={item}
                      deleteHandle={() => openModal(item.id)}
                    />
                  ))}
                </div>
              )}
              {total !== 0 && (
                <ReactPaginate
                  pageCount={Math.ceil(total / DEFAULT_PER_PAGE)}
                  onPageChange={loadMoreData}
                  disableInitialCallback={true}
                  forcePage={page - 1}
                  containerClassName="flex gap-x-3"
                />
              )}
            </div>
          </div>
        </>
      )}
    </Section>
  );
};
