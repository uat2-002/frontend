import ReactPaginate from 'react-paginate';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const PaginateComponent =
    (ReactPaginate as unknown as { default: typeof ReactPaginate }).default || ReactPaginate;

  return (
    <PaginateComponent
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }: { selected: number }) => onChange(selected + 1)}
      forcePage={currentPage - 1}
      nextLabel="→"
      previousLabel="←"

      previousAriaLabel="Previous page"
      nextAriaLabel="Next page"
      ariaLabelBuilder={(pageIndex: number, selectedPageIndex: number) =>
        pageIndex === selectedPageIndex + 1
          ? `Current page, page ${pageIndex}`
          : `Go to page ${pageIndex}`
      }

      containerClassName="flex items-center justify-center gap-2 mt-6 select-none"

      pageLinkClassName="flex items-center justify-center w-7 h-7 md:w-10 md:h-10
      rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
      previousLinkClassName="flex items-center justify-center h-7 md:h-10 px-4 
      rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
      nextLinkClassName="flex items-center justify-center h-7 md:h-10 px-4
       rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
      breakLinkClassName="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 text-gray-500"

      activeLinkClassName="!bg-black !text-white !border-black hover:!bg-gray-800"

      disabledClassName="opacity-50 pointer-events-none"
    />
  );
};
