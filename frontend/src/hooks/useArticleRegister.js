import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useFileRegister() {
  const navigate = useNavigate();

  const udpateArticle = (id, data) => {
    axios
      .put(`http://localhost:8082/api/articles//id/${id}`, data)
      .then((res) => {
        console.log(`update success: ${res}`);
        navigate('/Moderate');
      })
      .catch((err) => {
        console.log();
        console.log(`Error in UpdateArticleInfo!: ${err}`);
      });
  };

  return {
    udpateArticle,
  };
}

export default useFileRegister;
