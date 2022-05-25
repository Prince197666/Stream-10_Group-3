
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetchArticle from '../hooks/useFetchArticle';

function ArticleList(props) {
  // eslint-disable-next-line react/prop-types
  const { from } = props;
  const { articleList, getArticleByStatus } = useFetchArticle();
  useEffect(() => {
    const stat = (from === 'moderators') ? 'submit' : 'pass';
    getArticleByStatus(stat);
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
