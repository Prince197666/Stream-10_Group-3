import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */

function SearchTable({ data, columns }) {
//   const {articleList, getArticleByStatus} = useFetchArticle();

  //   // constructor
  //   useEffect(() => {
  //     getArticleByStatus('register');
  //   }, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotoPage,
    pageOptions,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
  );

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={`th${index + 1}`}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? '🔽'
                        : '🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={`row${index + 1}`}>
                {row.cells.map((cell, i) => (<td {...cell.cellProps} key={`tr${i + 1}`}>{cell.render('Cell')}</td>))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div id="pagination">
        <button type="button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        {' '}
        <button type="button" onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
        {' '}
        <button type="button" onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
        {' '}
        <button type="button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        <span>
          {'Page '}
          <strong>
            {`${pageIndex + 1} of ${pageOptions.length}`}
          </strong>
          {' '}
        </span>
        <span>
          {'| Go to page '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const currentPage = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(currentPage);
            }}
            style={{ width: '100px' }}
          />
        </span>
        {' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[3, 7, 15].map((pageUnit, index) => (
            <option key={`${index + 1}`} value={pageUnit}>
              {`Show ${pageUnit}`}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default SearchTable;
