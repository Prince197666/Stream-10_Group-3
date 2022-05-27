import React from 'react';
import {
  useTable, useSortBy, usePagination, useFilters,
} from 'react-table';
import { SelectSePracticeFilter } from './Filter';
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */

function SearchTable({ data, columns }) {
//   const defaultColumn = useMemo(() => ({
//     Filter: SelectSePracticeFilter,
//   }), []);
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
    allColumns,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: SelectSePracticeFilter },
    },
    useFilters,
    useSortBy,
    usePagination,
  );

  return (
    <>
      {/* filter input */}
      <div>
        {allColumns.map((column, i) => (
          <div key={`${i + 1}`} className="mb-2">
            {column.canFilter ? column.render('Filter') : null}
          </div>
        ))}
      </div>
      {/* show/hide checkbox */}
      <div className="mt-3">
        <strong>
          Select column to display/hide
        </strong>
      </div>
      <div className="mb-3">
        {allColumns.map((column, i) => (
          <div className="form-check form-check-inline" key={column.id}>
            <input className="form-check-input" type="checkbox" id={`inlineCheckbox${i + 1}`} {...column.getToggleHiddenProps()} />
            <label className="form-check-label" htmlFor={`inlineCheckbox${i + 1}`}>{column.id}</label>
          </div>
        ))}
      </div>
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
