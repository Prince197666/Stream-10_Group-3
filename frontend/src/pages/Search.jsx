// import React from 'react';
import React, { useEffect } from 'react';
import SearchTable from '../components/SearchTable';
import TablColumns from '../components/TableColumns';
import Styles from '../components/tablestyle';
import useFetchArticle from '../hooks/useFetchArticle';

function Search() {
  const {articleList, getArticleByStatus} = useFetchArticle();

  // constructor
  useEffect(() => {
    getArticleByStatus('register');
  }, []);

  return (
    <Styles>
      <SearchTable
        data={articleList}
        columns={TablColumns}
      />
    </Styles>
  );
}

export default Search;
