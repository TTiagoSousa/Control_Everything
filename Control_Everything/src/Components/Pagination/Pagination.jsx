import React from 'react';
import './Pagination.scss';

const Pagination = ({ currentPage, totalPages, onPageChange, perPage  }) => {

  const pageNumbers = [];

  const range = 1; // Define a quantidade de números de página a serem exibidos antes e depois do número de página atual

  let ellipsisStart = false; // Define se os pontos suspensivos devem ser exibidos no início
  let ellipsisEnd = false; // Define se os pontos suspensivos devem ser exibidos no final

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      i === currentPage ||
      (i >= currentPage - range && i <= currentPage + range)
    ) {
      pageNumbers.push(i);
    } else if (i < currentPage - range && !ellipsisStart) {
      pageNumbers.push('...');
      ellipsisStart = true;
    } else if (i > currentPage + range && !ellipsisEnd) {
      pageNumbers.push('...');
      ellipsisEnd = true;
    }
  }

  return (
    <div className="Pagination">
      {pageNumbers.map((pageNumber, index) => (
        <div key={index}>
          {pageNumber === '...' ? (
            <span className="ellipsis">...</span>
          ) : (
            <button
              className={currentPage === pageNumber ? 'active' : ''}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pagination;