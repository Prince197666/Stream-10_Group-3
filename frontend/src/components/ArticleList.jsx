import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetchArticle from '../hooks/useFetchArticle';

function ArticleList() {
  const { articleList, getArticleByStatus } = useFetchArticle();
  useEffect(() => {
    getArticleByStatus('submit');
  }, []);

  return (
    <>
      <p>Article List</p>
      <ol>
        {articleList.map((article, index) => (
          <li key={(index + 1).toString()}>
            <Link to={`/show-article/${article._id}`}>{article.title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ArticleList;
