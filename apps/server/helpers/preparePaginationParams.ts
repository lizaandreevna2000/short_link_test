export const preparePaginationParams = (
  page: number | string,
  perPage: number | string,
) => {
  const pageAsNumber = typeof page === 'string' ? parseInt(page) : page;
  const perPageAsNumber =
    typeof perPage === 'string' ? parseInt(perPage) : perPage;
  return {
    pageAsNumber,
    perPageAsNumber,
  };
};
