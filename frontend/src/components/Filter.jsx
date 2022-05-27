/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { useMemo } from 'react';

/**
 * Filter by SE Practice
 */
export function SelectSePracticeFilter({
  column: {
    filterValue, setFilter, preFilteredRows, id,
  },
}) {
  const options = useMemo(() => {
    const ops = new Set();
    preFilteredRows.forEach((row) => {
      ops.add(row.values[id]);
    });
    return [...ops.values()];
  }, [preFilteredRows, id]);

  return (
    <select
      value={filterValue}
      onChange={(e) => { setFilter(e.target.value || undefined); }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option
          value={option}
          key={`option${i + 1}`}
        >
          {option}
        </option>
      ))}
    </select>
  );
}

/**
 * Filter by the range of years
 */
export function YearRangeFilter({
  column: {
    filterValue = [], preFilteredRows, setFilter, id,
  },
}) {
  // set from and to value from the articles
  const [from, to] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <div
      style={{ display: 'flex' }}
    >
      <input
        type="number"
        // value={filterValue[0] || ''}
        value={filterValue[0] || from}
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
        }}
        placeholder={`From ${from}`}
        style={{
          width: '100px',
          marginRight: '0.5rem',
        }}
      />
      TO
      <input
        type="number"
        // value={filterValue[1] || ''}
        value={filterValue[1] || to}
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined]);
        }}
        placeholder={`To ${to}`}
        style={{
          width: '100px',
          marginLeft: '0.5rem',
        }}
      />
    </div>
  );
}
