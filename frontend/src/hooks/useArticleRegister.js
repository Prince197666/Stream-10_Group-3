import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useFileRegister() {
  const navigate = useNavigate();

  const udpateArticle = (id, data, role) => {
    axios
      .put(`http://localhost:8082/api/articles//id/${id}`, data)
      .then((res) => {
        console.log(`update success: ${res}`);
        if (role === 'moderators') {
          navigate('/Moderate');
        } else {
          navigate('/Analyse');
        }
      })
      .catch((err) => {
        console.log(`Error in UpdateArticleInfo!: ${err}`);
      });
  };

  return {
    udpateArticle,
  };
}

export default useFileRegister;
