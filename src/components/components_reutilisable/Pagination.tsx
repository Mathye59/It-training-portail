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
  const isMobile = window.innerWidth < 768;
  const maxButtons = isMobile ? 4 : 8;

  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let end = start + maxButtons - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxButtons + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center my-6 items-center space-x-2">
      {/* Flèche précédente */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-yale dark:text-white dark:bg-blueDarkIT disabled:opacity-30"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Numéros de page */}
      <div className="flex shadow-shadowFinlandais overflow-hidden">
        {visiblePages.map((page, index) => {
          const isFirst = index === 0;
          const isLast = index === visiblePages.length - 1;
          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`
                w-12 h-12 border text-base font-medium transition
                ${isFirst ? 'rounded-l-xl' : ''} ${isLast ? 'rounded-r-xl' : ''}
                ${
                  isActive
                    ? 'bg-violetIT text-white dark:bg-greenIT dark:text-blueDarkIT'
                    : 'bg-[#FFF5F9] text-yale hover:bg-[#F2EAF0] dark:bg-blueDarkIT dark:text-white dark:hover:bg-greenIT/30'
                }
                border-[#501F4F] dark:border-greenIT
              `}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Flèche suivante */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-yale dark:text-white dark:bg-blueDarkIT disabled:opacity-30"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default AppPagination;
