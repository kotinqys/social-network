import React, { useState } from 'react';

type PropsType = {
  totalItemsCount: number
  pageSize: number
  portionSize:number
  currentPage: number
  onChangeCurrentPage: (page:number)=>void
}

const Pagination:React.FC<PropsType> =({ totalItemsCount, pageSize, portionSize, currentPage, onChangeCurrentPage }) =>{
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const [portionNumber, setPortionNumber] = useState(1);
  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPageNum = (portionNumber - 1) * portionSize + 1;
  const righPageNum = portionNumber * portionSize;

  return (
    <ul className='pagination'>
      <button disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}>
        {'<'}
      </button>
      {pages
        .filter((page) => page >= leftPageNum && page <= righPageNum)
        .map((page, i) => (
          <li
            key={i}
            className={currentPage === page ? 'active' : ''}
            onClick={() => onChangeCurrentPage(page)}>
            {page}
          </li>
        ))}
      <button
        disabled={portionNumber === portionCount}
        onClick={() => setPortionNumber(portionNumber + 1)}>
        {'>'}
      </button>
    </ul>
  );
}

export default Pagination;
