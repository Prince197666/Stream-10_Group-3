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
      <p>Unchecked Articles</p>
      <ul>
        {articleList.map((article) => (
          <Link to={`/show-article/${article._id}`}>{article.title}</Link>
        ))}
      </ul>
    </>
  );
}

export default ArticleList;
