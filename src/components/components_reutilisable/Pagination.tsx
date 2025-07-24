import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const AppPagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center my-6 items-center space-x-2">
      {/* Previous Arrow */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-yale disabled:opacity-30"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Page Numbers */}
      <div className="flex shadow-shadowFinlandais overflow-hidden">
        {pages.map((page, index) => {
          const isFirst = index === 0;
          const isLast = index === pages.length - 1;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-12 h-12 border border-[#501F4F] text-base font-medium ${
                isActive
                  ? 'bg-violetIT text-white'
                  : 'bg-[#FFF5F9] hover:bg-[#F2EAF0 text-yale ]'
              } ${isFirst ? 'rounded-l-xl' : ''} ${
                isLast ? 'rounded-r-xl' : ''
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Arrow */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-yale disabled:opacity-30"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default AppPagination;
