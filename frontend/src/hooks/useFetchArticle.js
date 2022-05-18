import { useState } from 'react';
import axios from 'axios';

function useFetchArticle() {
  const [articleList, setArticleList] = useState([]);
  const [article, setArticle] = useState({});

  const getArticleByStatus = (status) => {
    axios
      .get(`http://localhost:8082/api/articles/status/${status}`)
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  };

  const getArticleById = (id) => {
    axios
      .get(`http://localhost:8082/api/articles/id/${id}`)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => {
        console.log(`err: ${err}`);
      });
  };

  return {
    articleList, article, getArticleByStatus, getArticleById,
  };
}

export default useFetchArticle;
